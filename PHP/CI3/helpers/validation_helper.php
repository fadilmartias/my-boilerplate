<?php
defined('BASEPATH') OR exit('No direct script access allowed');

if (!function_exists('check_special_characters')) {
    function check_special_characters($str) {
        if (preg_match('/[<>]/', $str)) {
            $CI = &get_instance();
            $error_message = 'Special characters like < and > are not allowed.';
            $CI->form_validation->set_message('check_special_characters', $error_message);
            return false;
        } else {
            return true;
        }
    }
}

?>