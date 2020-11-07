<?php

crawl_site();
function crawl_site()
{
    $pageSplitPattern = '#<div class="col-sm-4 col-md-4 col-lg-3 donation-meter-scroller">#';
    $donorSectionPattern = '#<script type="text/javascript">#';
    $donorsPattern = '#<div class="donation">(.*)</div>#Us';
    $data = "";
    $url = "https://runsignup.com/Race/Donate/IN/ColumbiaCity/VeteransMarathon";
    if (!$page_data = file_get_contents($url)) {
        return $data;
    } else {
        $first_part = preg_split($pageSplitPattern, $page_data)[1];
        $data = preg_split($donorSectionPattern, $first_part)[0];
        preg_match_all($donorsPattern, $data, $myMatches, PREG_SET_ORDER);
    }
    $donors_len = sizeof($myMatches);
    $clean_array = [];
    for ($i = 0; $i < $donors_len; $i++) {
        //echo '* * * * * *\n';
        //echo $myMatches[$i][0];
        $item = clean((string)$myMatches[$i][0]);
        //echo $item;
        $clean_array[] = $item;
    }
    echo JsonHandler::encode($clean_array);
}

/**
 * @param $string
 * @return string|string[]|null
 *
 * Terry Harvey
 * https://stackoverflow.com/questions/14114411/remove-all-special-characters-from-a-string
 */
function clean($string)
{
    $string = str_replace('<div class="donation">', '', $string);
    $string = str_replace('</div>', '', $string);
    $string = str_replace('<span class="amount">', '', $string);
    $string = str_replace('</span>', '', $string);
    $string = str_replace('<span class="donor">', '', $string);
    $string = str_replace('&amp;', '&', $string);
    $string = str_replace(array("\n", "\r"), ' ', $string); // Replaces newlines
    $string = str_replace(array(" ", "  "), '-', $string); // Replaces all spaces with hyphens.
    $string = preg_replace('/[^A-Za-z0-9\-&$]/', '', $string); // Removes special chars.
    $string = str_replace('-', ' ', $string); // Replaces all spaces with hyphens.
    return trim($string);
}

class JsonHandler
{
    protected static $_messages = array(
        JSON_ERROR_NONE => "No error has occurred",
        JSON_ERROR_DEPTH => "The maximum stack depth has been exceeded",
        JSON_ERROR_STATE_MISMATCH => "Invalid or malformed JSON",
        JSON_ERROR_CTRL_CHAR => "Control character error, possibly incorrectly encoded",
        JSON_ERROR_SYNTAX => "Syntax error",
        JSON_ERROR_UTF8 => "Malformed UTF-8 characters, possibly incorrectly encoded",
    );

    public static function encode($value, $options = 0)
    {
        if ($value == null) {
            return ("Value Null");
        }
        $result = json_encode($value, $options);

        if ($result) {
            return $result;
        }
        throw new RuntimeException(static::$_messages[json_last_error()]);
    }

    public static function decode($json, $assoc = false)
    {
        $result = json_decode($json, $assoc);

        if ($result) {
            return $result;
        }
        throw new RuntimeException(static::$_messages[json_last_error()]);
    }
}
