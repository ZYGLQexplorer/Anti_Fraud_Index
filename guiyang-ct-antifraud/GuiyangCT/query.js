function addFavorite() {
    var e = "http://www.hbca110.com", a = document.title, o = navigator.userAgent.toLowerCase(); if
        (-1 < o.indexOf("360se")) $("#favorite_pc").modal(); else if (-1 < o.indexOf("msie 8"))
        window.external.AddToFavoritesBar(e, a); else if (document.all) try { window.external.addFavorite(e, a) } catch (e) { $("#favorite_pc").modal() } else window.sidebar ? window.sidebar.addPanel(a, e, "") : $("#favorite_pc").modal()
}
$(function () {
    new Swiper("#swiper-advertising", {
        direction: "vertical", loop: !0, loopedSlides: 10, autoplay: {
            delay: 2e3
        }, height: 30
    }); var e = $(".video-box video")[0]; e.src; $(".modal-style").click(function () {
        var
        e = $(".video-box video")[0]; e.muted && (e.muted = !1)
    }), $("#favorite_video").modal({
        backdrop: "static", keyboard:
            !1
    }), $("#favorite_video").on("hide.bs.modal", function () { $(".video-box video")[0].pause() }), $.ajax({
        type: "GET", dataType: "jsonp", url: "https://api.110.cqqgsafe.com/7J6zvmx8Y/article/home", data: {
            json_type: 1
        }, success: function (e) {
            var a = ""; if (200 != e.code) a = '<div class="null-tips">' + e.msg + "</div>"; else {
                var
                o = e.data.list; for (var t in o) a += '<a href="https://www.110.cqqgsafe.com/article/info?id=' + o[t].id
                    + '" class="news-item" target="_blank"><div class="news-item-left"><h5>' + o[t].title + "</h5><p>" + o[t].source
                    + '</p></div><div class="news-item-img"><img src="' + o[t].img_url + '"></div></a>'
            } $(".news-body").append(a)
        }
    }), $.ajax({
        type: "GET", dataType: "jsonp", url: "https://api.110.cqqgsafe.com/7J6zvmx8Y/domain/home", data: {
            json_type: 1
        }, success: function (e) {
            var a = ""; if (200 != e.code) a = '<div class="null-tips">' + e.msg + "</div>"
                ; else {
                    var o = e.data.list; for (var t in o) a
                        += '<div class="swiper-slide"><a href="https://www.110.cqqgsafe.com/exposure/index" target="_blank"><span class="text-red">'
                        + o[t].cate_name + "</span><span>" + o[t].domain + '</span><span class="text-red">' + o[t].msg + "</span></a></div>"
            } $("#swiper-exposure .swiper-wrapper").append(a); new Swiper("#swiper-exposure", {
                direction: "vertical", loop:
                    !0, loopedSlides: 10, autoplay: { delay: 2e3 }, height: 20
            })
        }
    }), $(".search").on("click", function () {
        $("#myModal").modal(); var d = $("#domain").val(); if (!d || d.length < 5 || d.indexOf(".") < 0) return !1; $.ajax({
            type: "get", dataType: "jsonp", url: "https://api.110.cqqgsafe.com/7J6zvmx8Y/domain/query", data: {
                domain: d,
                json_type: 1
            }, success: function (e) {
                $(".domain-box .domain").html(d), $(".table tbody").empty(); var a = ""; if
                    (200 != e.code) a = '<tr><td colspan="3" class="text-center">' + e.msg + "</td></tr>"; else {
                        var o = e.data; for (var t
                            in o) {
                                var i = ""; i += "<td>" + (o[t].domain ? e.data[t].domain : "-") + "</td>", i += "<td>" + (o[t].source ?
                                    e.data[t].source : "-") + "</td>", a = "<tr>" + (i += "<td>" + (o[t].hasOwnProperty("contact_mobile") ?
                                        e.data[t].contact_mobile : "-") + "</td>") + "</tr>"
                        }
                } $(".table tbody").append(a)
            }
        })
    }),
        $(".btn-more").click(function () {
            var e = $("#domain").val();
            window.open("https://www.110.cqqgsafe.com/search/violation?kw=" + e)
        }), $(" body").keydown(function () { "13" == event.keyCode && $(".search").click() }), $("#ip_info").click(function () {
            var e = $("#domain").val();
            window.open("https://www.110.cqqgsafe.com/search/ip-info?kw=" + e)
        }), $(" #company_info").click(function () {
            var
            e = $("#domain").val(); window.open("https://www.110.cqqgsafe.com/search/company-info?kw=" + e)
        })
})