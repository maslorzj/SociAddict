// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require ckeditor/init
//= require dropzone

$( document ).ready(function() {
    $("#choose_model").on('change', function() {
      id = $("#choose_model").val()
      $(".edit_content_iframe").hide();
      $("#edit_content" + id + "_iframe").show();
    });
    $(".edit_content_iframe .navbar-text").hide();
});