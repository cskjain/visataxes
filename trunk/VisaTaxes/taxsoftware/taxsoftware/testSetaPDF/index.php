<?php
set_include_path(get_include_path() . PATH_SEPARATOR . realpath(dirname(__FILE__).'/../SetaPDF/'));

// define Font-Path
define('SETAPDF_FORMFILLER_FONT_PATH','FormFiller/font/');

// require API
require_once('FormFiller/SetaPDF_FormFiller.php');

/**
 * init a new instance of the FormFiller
 */
$FormFiller =& SetaPDF_FormFiller::factory(
    "f1040nre.pdf" /* Path to original document */, 
    "" /* Owner- or User-Passwort */, 
    "I" /* How to output the document: "F" = to File, "I" = Inline, "D" = Download */
);

// Check for errors
if (SetaPDF::isError($FormFiller)) {
    echo "<pre>";
    print_r($FormFiller);
    echo "</pre>";
    die();
}

/**
 * As different Acrobat Versions displays forms anotherway there's built in switch
 * which tries to simulate each version. Following constants are allowed:
 * AREADER_5 = Acrobat Reader 5
 * AREADER_6 = Acrobat Reader 6
 * AREADER_7 = Acrobat Reader 7
 */
$FormFiller->setCompatMode(AREADER_6);

/**
 * Use Update or create a whole new document 
 */
$FormFiller->setUseUpdate(false);

// Get all Form Fields
$fields =& $FormFiller->getFields();
// Check for errors
if (SetaPDF::isError($fields)) {
    die($fields->message);
}


/**
 *  to get the fieldnames you can print them with this snipped on your screen
 */
#echo "<pre>";
#print_r(array_keys($fields));
#echo "</pre>";
#flush();

// Fill in Textfields
$fields['f1_01(0)']->setValue("Ahmed Othman");;


// Ouput the new PDF
$FormFiller->fillForms('NewPDF.pdf');
?>
