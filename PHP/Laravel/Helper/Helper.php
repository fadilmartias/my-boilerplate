<?php
namespace App\Helper;

class Helper
{
    public static function TanggalIndo($date)
    {
        $BulanIndo = array("Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember");

        $tahun = substr($date, 0, 4);
        $bulan = substr($date, 5, 2);
        $tgl = substr($date, 8, 2);

        $result = $tgl . " " . $BulanIndo[(int) $bulan - 1] . " " . $tahun;
        return ($result);
    }


    public static function TanggalIndojam($date)
    {

        $BulanIndo = array("Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember");

        $tahun = substr($date, 0, 4);
        $bulan = substr($date, 5, 2);
        $tgl = substr($date, 8, 2);



        $jam = substr($date, 11, 8);

        if ($tahun == '0000') {
            return '-';
        } else {
            $result = $tgl . " " . $BulanIndo[(int) $bulan - 1] . " " . $tahun . ' ' . $jam;
            return ($result);
        }
    }
    public static function HariIndo($day)
    {
        switch ($day) {
            case 'Monday':
                return 'Senin';
                break;
            case 'Tuesday':
                return 'Selasa';
                break;
            case 'Wednesday':
                return 'Rabu';
                break;
            case 'Thursday':
                return 'Kamis';
                break;
            case 'Friday':
                return 'Jumat';
                break;
            case 'Saturday':
                return 'Sabtu';
                break;
            case 'Sunday':
                return 'Minggu';
                break;
        }
    }

    public static function escape_string($param)
    {
        if (is_array($param))
            return array_map(_METHOD_, $param);

        if (!empty($param) && is_string($param)) {
            return str_replace(array('\\', "\0", "\n", "\r", "'", '"', "\x1a"), array('\\\\', '\\0', '\\n', '\\r', "\\'", '\\"', '\\Z'), $param);
        }

        return $param;
    }

    public static function forid($text)
    {
        $forid = preg_replace('/[^a-zA-Z0-9\']/', '_', $text);
        $forid = str_replace("'", '', $forid);
        return $forid;

    }

    public static function formatRupiah($number)
    {
        $formatted = 'Rp ' . number_format($number, 0, ",", ".");
        return $formatted;
    }

    public static function formatIDR($number)
    {
        $formatted = 'IDR ' . number_format($number, 0, ",", ".");
        return $formatted;
    }

    public static function formatUSD($number)
    {
        $formatted = '$ ' .number_format((float) $number, 0, '.', '');
        return $formatted;
    }

    public static function customArraySlice($array, $start, $length)
    {
        if ($start < 0 || $length <= 0) {
            // Handle error, misalnya dengan mengembalikan pesan kesalahan atau melakukan tindakan lain
            return array();
        }

        return array_slice($array, $start, $length);
    }

    public static function formatTanggalHari($date)
    {
        
        // Array untuk nama hari dalam bahasa Indonesia
        $hari = array(
            'Sunday' => 'Minggu',
            'Monday' => 'Senin',
            'Tuesday' => 'Selasa',
            'Wednesday' => 'Rabu',
            'Thursday' => 'Kamis',
            'Friday' => 'Jumat',
            'Saturday' => 'Sabtu'
        );

        // Array untuk nama bulan dalam bahasa Indonesia
        $bulan = array(
            '01' => 'Jan',
            '02' => 'Feb',
            '03' => 'Mar',
            '04' => 'Apr',
            '05' => 'Mei',
            '06' => 'Jun',
            '07' => 'Jul',
            '08' => 'Agu',
            '09' => 'Sep',
            '10' => 'Okt',
            '11' => 'Nov',
            '12' => 'Des'
        );

        // Pisahkan tanggal dan waktu
        $datetime_parts = explode(' ', $date->format('Y-m-d H:i'));
        $date = $datetime_parts[0];
        $time = $datetime_parts[1];

        // Pisahkan bagian-bagian dari tanggal
        $date_parts = explode('-', $date);
        $year = $date_parts[0];
        $month = $date_parts[1];
        $day = $date_parts[2];

        // Format ulang tanggal dengan nama hari dan bulan dalam bahasa Indonesia
        $tanggal_indonesia = $hari[date('l', strtotime($date))] . ', ' . $day . ' ' . $bulan[$month] . ' ' . $year . ' ' . $time;

        return $tanggal_indonesia;

    }

}

?>