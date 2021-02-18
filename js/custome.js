$(document).ready(function() {

    $('#footernav ul li a').each(function() {
        $(this).attr('href', '#')
    })
    $('.addbx ').each(function() {
        var ac = $(this).hasClass('active')
        if ($(this).hasClass('active')) {
            $(ac).addClass('naresh')
        }
    })
    var fullwidth = $(window).width();

    $('body').on('click', '.mobilenav', function() {
        $('.navbar-collapse').toggleClass('activenav')
        if ($('.navbar-collapse').hasClass('activenav')) {
            $('body').addClass('_freeze')
            $('.overlay').addClass('show')
                // console.log('slide is open')
            setTimeout(function() {
                $('.shop').addClass('show')
                $('.shop a').attr('aria-expanded', 'true')
                $('#productnav').parent().addClass('navopen')
            }, 200)
        } else {
            $('body').removeClass('_freeze')
            $('.overlay').removeClass('show')
        }
    })

    // $('body').on('click', '.viewContainer, ul.submenu li a, .overlay, .toggle-menu', function (){
    //     $('.navbar-collapse').removeClass('activenav')
    //     $('body').removeClass('_freeze')
    //     $('.overlay').removeClass('show')
    // })
    setInterval(function() {
        if ($('.navbar').hasClass('fixed-top')) {} else {
            $('.navbar-brand:not(.slidem)').toggleClass('closeeys')
        }
    }, 2000)




    $('body').on('click', '#togglesearch,.searchbutton', function() {
        $('.mobilesearch').toggleClass('active');
        if ($('.mobilesearch').hasClass('active')) {
            setTimeout(function() {
                document.getElementById('globSearch').focus();
            }, 200)
        }
    })


    $('body').on('click', '.togglebtn', function() {
        var b = $(this).attr('itemid');
        $('#' + b).slideToggle();
    })

    // $('body').on('click', '#myTab a', function (){
    //     e.preventDefault()
    //     $(this).tab('show')
    // })




    if (fullwidth > 769) {
        $('body').on({
            mouseover: function() {
                var wd = $(window).width();
                $('.fullwidth').css('width', wd + 1);
                if (fullwidth > 769) {
                    var lp = $(this).offset().left;
                    $(this).find('.fullwidth').css('left', -lp)
                }
                // console.log(lp + '--' + wd)
                $(this).addClass('active');
                $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(300);
            },
            mouseout: function() {
                $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(300);
                $(this).removeClass('active');
            }
        }, 'ul.navbar-nav li.dropdown');

        $('body').on('click', '.dropdown-menu', function() {
            var b = $(this).parent()
                // console.log(b)
            $(b).removeClass('active')
            $(this).stop(true, true).delay(100).fadeOut(300);
        })

    }

    $(window).scroll(function(event) {
        var scroll = $(window).scrollTop();
        if (scroll > 30) {
            $('.navbar').addClass('fixed-top')
        } else {
            $('.navbar').removeClass('fixed-top')
        }
    });

    $(window).scroll(function(event) {
        var scroll = $(window).scrollTop();
        if (scroll > 30) {
            $('.app-install-popup').addClass('app-fixed-popup')
        } else {
            $('.app-install-popup').removeClass('app-fixed-popup')
        }
    });


    $("body").on("click", '.navsubtitle', function(e) {
        e.stopPropagation();
        e.preventDefault();
        var t = $(this).parent();
        if ($(t).hasClass('navopen')) {
            $(t).toggleClass('navopen');
            // console.log('exist');
        } else {
            $('div').removeClass('navopen');
            $(t).toggleClass('navopen');
            // console.log('not exist');
        }
    });



    $('body').on('change', '.artistfilter input[type="checkbox"]', function() {
        var b = $(this).val()
        if (this.checked) {
            // console.log(b)
            if (b == 'all') {
                $('button.all').addClass('activebtn')
                $('.filterbox ').show()
                $('#afilter').removeClass('addfilter')
                $('.artistfilter input:checkbox').removeAttr('checked')
                $(this).attr('checked', 'checked')
            } else {
                $('button.all').removeClass('activebtn')
                    // console.log('custom')
                $('#afilter').addClass('addfilter')
                $('.filterbox ').hide()
                checkeditems()
            }
        } else {
            var a = $('.artistfilter input[type="checkbox"]').map(function() {
                if (this.checked)
                    return $(this).val();
            }).toArray();
            // console.log(b)
            if (a.length == 0) {
                // $('button.all').addClass('activebtn')
                $('.filterbox ').show()
                $('#afilter').removeClass('addfilter')
                $('.artistfilter input:checkbox').removeAttr('checked')
            } else {
                $('.' + b).hide()
            }
        }
    })



    fileinputChange();

    // dellivery page
    $('.ckbox').each(function() {
            $(this).on('click', function() {
                var b = $(this).parent().parent();
                $('.addbx').removeClass('active');
                if ($(this).attr('checked', 'checked')) {
                    console.log('checked');
                    $(b).addClass('active');
                }
            })
        })
        // end of dellivery page
        // login register
    $('.forgotpassword').click(function() {
        $('.loginregister').hide();
        $('.forgotcontainer').show();
    })


    $('body').on('click', '.toggleglobal', function() {
        var d = $(this).attr('data-toggle');
        $(d).toggleClass('activediv')
    })

});
// end of document ready

function checkeditems() {
    $('.artistfilter input:checked').each(function() {
        var d = $(this).val()
        $('.' + d).show()
    })
}

function filteropt(opt) {
    var b = $('.filteroption');
    if ($('#' + opt).hasClass('active')) {
        $('#' + opt).toggleClass('active');
        $('.' + opt).toggleClass('active');
        $(b).toggleClass('active');
        $('.plisting').toggleClass('disable');
    } else {
        $('.filteroptionsModal').removeClass('active');
        $('.plisting').removeClass('disable');
        $(b).removeClass('active');
        $('.btn').removeClass('active');
        //  console.log(b);
        $('#' + opt).addClass('active');
        $('.' + opt).addClass('active');
        $(b).addClass('active');
        $('.plisting').addClass('disable');
    }
}

function getUrl() {
    var b = window.location.href;
}


function tablink(ab) {
    $(' .nav-tabs a.nav-link').attr('aria-expanded', false)
    $(' .nav-tabs a.nav-link').removeClass('active')
    $('.tab-pane').removeClass('active');
    $(' .nav-tabs a.nav-link[href="' + ab + '"]').addClass('active')
    $(' .nav-tabs a.nav-link[href="' + ab + '"]').attr('aria-expanded', true)
    $(ab).addClass('active');
    $(ab).attr('aria-expanded', 'true');
}

function setqty(q) {
    var qt = parseInt($('#qty').val());
    if (q == 'increament') {
        qt + 1;
        $('#qty').val(qt + 1)
    } else {
        if (qt == 0) {
            return false;
        }
        $('#qty').val(qt - 1);
    }
}

function editadress() {
    $('#mbselectedbox').fadeOut();
    $('#listaddress').fadeIn('slow');
    $('#con_payment').hide();
    $('.billingdetails').hide();
    $('#confirmaddress').show();
}

function confirmAddress() {
    $('#mbselectedbox').fadeIn();
    $('#mbselectedbox .addbx').addClass('active');
    $('#listaddress').fadeOut('slow');
    $('#con_payment').show();
    $('.billingdetails').show();
    $(window).scrollTop(0)
    $('#confirmaddress').hide();
}

function fileinputChange() {
    $('.uploadimg').on('click', function() {
        var vale = $(this).val();
        // console.log('fafads234523452345')
        // alert(vale + 'this is test')
        var path = $(this).parent().next();
        $(path).html(vale);
    })
}

function validatePincode(country, postcode) {
    console.log(typeof country + ' postcode ' + postcode)
    if (country === '99') {
        var reg = /^[1-9][0-9]{5}$/
        if (!reg.test(postcode)) {
            // console.log('not valid')
            $('#editAdd').find('[name="postalcode"]').parent().addClass('error')
        } else {
            // console.log('erroroor')
        }
    }
}