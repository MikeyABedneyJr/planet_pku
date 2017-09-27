$(document).ready(function() {
    $('#contact_form').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            recipe_name: {
                validators: {
                        stringLength: {
                        min: 2,
                    },
                        notEmpty: {
                        message: 'Please supply the recipe name'
                    }
                }
            },
            prep_time: {
                validators: {
                    notEmpty: {
                        message: 'Please supply the time it takes to to prepare ingredients'
                    },
                }
            },
            cook_time: {
                validators: {
                    notEmpty: {
                        message: 'Please supply the time it takes to cook ingredients'
                    },
                }
            },
            serving_size: {
                validators: {
                    notEmpty: {
                        message: 'Please supply the number of people this recipe serves'
                    },
                }
            },
            difficulty: {
                validators: {
                    notEmpty: {
                        message: 'Please select difficulty level'
                    }
                }
            },
            meal_course: {
                validators: {
                    notEmpty: {
                        message: 'Please select the primary course this recipe would be used for'
                    }
                }
            },
            phe_amount: {
                validators: {
                    notEmpty: {
                        message: 'Please enter exact amount of phe for this recipe (in grams)'
                    },
                }
            },
            recipe_description: {
                validators: {
                      stringLength: {
                        min: 10,
                        max: 1500,
                        message:'Please enter at least 10 characters and no more than 1500'
                    },
                    notEmpty: {
                        message: 'Please supply a description of your recipe'
                    }
                    }
                }



//             last_name: {
//                validators: {
//                     stringLength: {
//                        min: 2,
//                    },
//                    notEmpty: {
//                        message: 'Please supply your last name'
//                    }
//                }
//            },
//            email: {
//                validators: {
//                    notEmpty: {
//                        message: 'Please supply your email address'
//                    },
//                    emailAddress: {
//                        message: 'Please supply a valid email address'
//                    }
//                }
//            },
//            phone: {
//                validators: {
//                    notEmpty: {
//                        message: 'Please supply your phone number'
//                    },
//                    phone: {
//                        country: 'US',
//                        message: 'Please supply a vaild phone number with area code'
//                    }
//                }
//            },
//            address: {
//                validators: {
//                     stringLength: {
//                        min: 8,
//                    },
//                    notEmpty: {
//                        message: 'Please supply your street address'
//                    }
//                }
//            },
//            city: {
//                validators: {
//                     stringLength: {
//                        min: 4,
//                    },
//                    notEmpty: {
//                        message: 'Please supply your city'
//                    }
//                }
//            },
//            zip: {
//                validators: {
//                    notEmpty: {
//                        message: 'Please supply your zip code'
//                    },
//                    zipCode: {
//                        country: 'US',
//                        message: 'Please supply a vaild zip code'
//                    }
//                }
//            },

            }
        })



        // Image upload
//        $("#input-image").fileinput({
//          maxFileCount: 1,
//          showUploadedThumbs = true,
//          maxFileCount = true,
//          showPreview = true,
//          allowedFileExtensions: ["jpg", "png", "gif"],
//          maxFilePreviewSize: 1000,
//          minImageWidth: 100,
//          minImageHeight: 100,
//          maxImageWidth: 1000,
//          maxImageHeight: 1000,
//        });

        .on('success.form.bv', function(e) {
            $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
                $('#contact_form').data('bootstrapValidator').resetForm();

            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            // Use Ajax to submit form data
            $.post($form.attr('action'), $form.serialize(), function(result) {
                console.log(result);
            }, 'json');
        });

      // Green buttons for new rows
      $(function() {
          $(document).on('click', '.btn-add', function(e)
          {

              e.preventDefault();

              var controlForm = $('.controls form:first'),
                  currentEntry = $(this).parents('.entry:first'),
                  newEntry = $(currentEntry.clone()).appendTo(controlForm);

              newEntry.find('input').val('');
              controlForm.find('.entry:not(:last) .btn-add')
                  .removeClass('btn-add').addClass('btn-remove')
                  .removeClass('btn-success').addClass('btn-danger')
                  .html('<span class="glyphicon glyphicon-minus"></span>');
          }).on('click', '.btn-remove', function(e)
          {
          $(this).parents('.entry:first').remove();

          e.preventDefault();
          return false;
        });
      });
});

