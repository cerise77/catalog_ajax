$(document).ready(function () {


    $('.drop-down').on('click', function () {
        $('.list-menu').toggleClass('speed-in');
        event.stopPropagation();
    });

    $('body').on('click', function () {
        $('.list-menu').removeClass('speed-in');
    });


    var accordion = new Accordion($('#m_menu'), false);

    var makeCatalog = function(url){
    $.ajax({
        url: url,
        contentType: "application/json; charset=utf-8",
        dataType: "text",
        success: function(data) {
            var days = $.parseJSON(data);
            for (var i=0; i<days.length; ++i) {
            var $template = $($('#prTemplate').html());

                $template.find('p').text(days[i]["description"]);
                $template.find('h3').text(days[i]["day"]);

                $template.data('id', days[i].id);
                $template.data('description', days[i]["description"]);
                $("<div></div>").append($template).appendTo("#gallery-items");

            }
        }
    });
    }

    makeCatalog("data/january.json");

    var submenu = 'catalog';

    $('body').on('click', '.submenu li', function () {
        submenu = $(this).find('a').text();
        $('.list-menu').removeClass('speed-in');


        switch (submenu){
            case 'Февраль':
                $("#gallery-items").empty();
                makeCatalog("data/fabruary.json");

                  $(".pr-text").html("Февраль 2013");
                break;

              case 'Март':
                    $("#gallery-items").empty();
                    makeCatalog("data/january.json");

                    $(".pr-text").html("Март 2013");
              break;

              case 'Апрель':
                    $("#gallery-items").empty();
                    makeCatalog("data/january.json");

                    $(".pr-text").html("Апрель 2013");
              break;

              case 'Май':
                    $("#gallery-items").empty();
                    makeCatalog("data/january.json");

                    $(".pr-text").html("Май 2013");
              break;

              case 'Июнь':
                    $("#gallery-items").empty();
                    makeCatalog("data/january.json");

                    $(".pr-text").html("Июнь 2013");
              break;

              case 'Июль':
                    $("#gallery-items").empty();
                    makeCatalog("data/january.json");

                    $(".pr-text").html("Июль 2013");
              break;

              case 'Август':
                    $("#gallery-items").empty();
                    makeCatalog("data/january.json");

                    $(".pr-text").html("Август 2013");
              break;

              case 'Сентябрь':
                    $("#gallery-items").empty();
                    makeCatalog("data/january.json");

                    $(".pr-text").html("Сентябрь 2013");
              break;

              case 'Октябрь':
                    $("#gallery-items").empty();
                    makeCatalog("data/january.json");

                    $(".pr-text").html("Октябрь 2013");
              break;

              case 'Ноябрь':
                    $("#gallery-items").empty();
                    makeCatalog("data/january.json");

                    $(".pr-text").html("Ноябрь 2013");
              break;

              case 'Декабрь':
                    $("#gallery-items").empty();
                    makeCatalog("data/january.json");

                    $(".pr-text").html("Декабрь 2013");
              break;

            default:
                $("#gallery-items").empty();
                makeCatalog("data/january.json");

                $(".pr-text").html("Январь 2013");
            }
    });


});


    var Accordion = function (el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;
        var links = this.el.find('.link');
        links.on('click', {
            el: this.el,
            multiple: this.multiple
        }, this.dropdown);
    };

    Accordion.prototype.dropdown = function (e) {
        var $el = e.data.el;
        $this = $(this),
        $next = $this.next();
        $next.slideToggle();
        $this.parent().toggleClass('open');
        if (!e.data.multiple) {
            $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
        }
    };
