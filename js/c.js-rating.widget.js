(function(d, t, e, m){
    
    // Async Rating-Widget initialization.
    window.RW_Async_Init = function(){
                
        RW.init({
            huid: "466596",
            uid: "fc15f40de5fc0d53d03b6234f85af6d8",
            source: "website",
            options: {
                "advanced": {
                    "star": {
                        "stars": 3
                    },
                    "font": {
                        "hover": {
                            "color": "#FFFFFF"
                        },
                        "color": "#FFFFFF",
                        "type": "Droid Arabic Naskh Bold"
                    },
                    "text": {
                        "rateAwful": "سيء",
                        "ratePoor": "جيد",
                        "rateAverage": "ممتاز",
                        "rateThis": "",
                        "like": "أحبه",
                        "dislike": "لا أحبه",
                        "vote": "",
                        "votes": "",
                        "weRecommend": "نوصي"
                    }
                },
                "size": "medium",
                "boost": {
                    "rate": 2
                },
                "label": {
                    "background": "#0071BC"
                },
                "lng": "ar",
                "style": "flat_blue",
                "isDummy": false
            } 
        });
        RW.render();
    };
        // Append Rating-Widget JavaScript library.
    var rw, s = d.getElementsByTagName(e)[0], id = "rw-js",
        l = d.location, ck = "Y" + t.getFullYear() + 
        "M" + t.getMonth() + "D" + t.getDate(), p = l.protocol,
        f = ((l.search.indexOf("DBG=") > -1) ? "" : ".min"),
        a = ("https:" == p ? "secure." + m + "js/" : "js." + m);
    if (d.getElementById(id)) return;              
    rw = d.createElement(e);
    rw.id = id; rw.async = true; rw.type = "text/javascript";
    rw.src = p + "//" + a + "external" + f + ".js?ck=" + ck;
    s.parentNode.insertBefore(rw, s);
    }(document, new Date(), "script", "rating-widget.com/"));