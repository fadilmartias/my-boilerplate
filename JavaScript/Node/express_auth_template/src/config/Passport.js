import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import model from "@/models/index.js";
import jwt from "jsonwebtoken";

const User = model.User;
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: process.env.GOOGLE_CALLBACK_URL
}, async (accessToken, refreshToken, profile, done) => {
  try {
    // Cari pengguna berdasarkan Google ID
    let user = await User.findOne({ where: { google_id: profile.id } });

    if (!user) {
      // Jika pengguna tidak ada, buat pengguna baru dengan Google ID
      user = await User.create({
        google_id: profile.id,
        username: profile.emails[0].value,
        name: profile.displayName,
        email: profile.emails[0].value,
      });
    }

    // Buat JWT access token dan refresh token untuk pengguna
    const accessToken = jwt.sign(
      { id: user.id, name: user.username, email: user.email, username: user.username, status: user.status },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "1y" }
    );

    const refreshToken = jwt.sign(
      { id: user.id, name: user.username, email: user.email, username: user.username, status: user.status },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "1y" }
    );

    user.update({ refresh_token: refreshToken });

    // Kembalikan pengguna
    return done(null, user, { accessToken, refreshToken });
  } catch (error) {
    return done(error);
  }
}));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findByPk(id);
    done(null, user);
  } catch (error) {
    done(error);
  }
});

export default passport;
