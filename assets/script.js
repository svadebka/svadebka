$(function () {
    $("#image-gallery-women")
        .justifiedGallery({
            captions: false,
            margins: 5,
        })
        .on("jg.complete", function () {
            window.lightGallery(
                document.getElementById("image-gallery-women"),
                {
                    autoplayFirstVideo: false,
                    pager: false,
                    galleryId: "women",
                    plugins: [lgZoom, lgThumbnail],
                    mobileSettings: {
                        controls: false,
                        showCloseIcon: false,
                        download: false,
                        rotate: false
                    }
                }
            );
        });
    $("#image-gallery-men")
        .justifiedGallery({
            captions: false,
            margins: 5,
        })
        .on("jg.complete", function () {
            window.lightGallery(
                document.getElementById("image-gallery-men"),
                {
                    autoplayFirstVideo: false,
                    pager: false,
                    galleryId: "men",
                    plugins: [lgZoom, lgThumbnail],
                    mobileSettings: {
                        controls: false,
                        showCloseIcon: true,
                        download: false,
                        rotate: false
                    }
                }
            );
        });
    $("#image-gallery-colors")
        .justifiedGallery({
            captions: false,
            margins: 5,
            rowHeight: Math.max(60, Math.floor($(window).width() / 23)),
        })
        .on("jg.complete", function () {
            window.lightGallery(
                document.getElementById("image-gallery-colors"),
                {
                    autoplayFirstVideo: false,
                    pager: false,
                    galleryId: "colors",
                    plugins: [lgZoom, lgThumbnail],
                    mobileSettings: {
                        controls: false,
                        showCloseIcon: true,
                        download: false,
                        rotate: false
                    }
                }
            );
        });

    $('button').click(function (e) {
        $('.collapse').collapse('hide');
    });
});