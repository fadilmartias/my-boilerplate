<?php
defined('BASEPATH') OR exit('No direct script access allowed');

if (!function_exists('tanggal_indonesia')) {
    function tgl_indo($tanggal) {
        // Array nama bulan dalam bahasa Indonesia
        $bulan_indonesia = array(
            'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
            'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
        );

        $tanggal_dipelajari = DateTime::createFromFormat('Y-m-d', $tanggal);
        $bulan_index = $tanggal_dipelajari->format('n') - 1;

        $tanggal_baru = $tanggal_dipelajari->format('j') . ' ' . $bulan_indonesia[$bulan_index] . ' ' . $tanggal_dipelajari->format('Y');
        
        return $tanggal_baru;
    }
}


if (!function_exists('rp')) {
    function rp($rp) {
       
		return "Rp " . number_format($rp,0,',','.');
    }
}

if (!function_exists('escape_string')) {
	function escape_string($param) {
        if(is_array($param))
            return array_map(_METHOD_, $param);
    
        if(!empty($param) && is_string($param)) {
            return str_replace(array('\\', "\0", "\n", "\r", "'", '"', "\x1a"), array('\\\\', '\\0', '\\n', '\\r', "\\'", '\\"', '\\Z'), $param);
        }
    
        return $param;
    }
}


if (!function_exists('lah')) {
    function lah($var) {
        echo "<pre>";
		print_r($var);
		echo "</pre>";
		die;
    }
}

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

if (!function_exists('is_nomor_urut_exists')) {
    function is_nomor_urut_exists($nomor_urut, $id_vote) {
        $CI = &get_instance();
        $CI->load->database();

        $CI->db->where('id_vote', $id_vote);
        $CI->db->where('nomor_urut', $nomor_urut);
        $query = $CI->db->get('tbl_vote_finalis');
        print_r($query);
        if($query->num_rows() > 0) {
            $error_message = 'Nomor urut duplikat';
            $CI->form_validation->set_message('is_nomor_urut_exists', $error_message);
            return false;
        } else {
            return true;
        }

    }
}

?>