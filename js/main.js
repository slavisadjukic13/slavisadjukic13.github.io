// Show dropdown on hover - enable possibility link on trigger
$.fn.oDropdownHover = function (dropdownMenuInterval) {
    var $dropdownMenuInterval = dropdownMenuInterval || 50;

    $(this).each(function () {
        var $this = $(this),
            $dropdownMenu = $this.find('.dropdown-menu'),
            $dropdownAnchor = $this.find('.dropdown-toggle'),
            $dropdownMenuTimeout;

        // Make dropdown accessble on hover
        $this.on('mouseover', function () {
            clearTimeout($dropdownMenuTimeout);
            $this
                .addClass('open')
                .find('.dropdown-toggle')
                .attr('aria-expanded', 'true');
        }).on('mouseleave', function () {
            $dropdownMenuTimeout = setTimeout(function () {
                $this
                    .removeClass('open')
                    .find('.dropdown-toggle')
                    .attr('aria-expanded', 'false');
            }, $dropdownMenuInterval);
        });

        // Make anchor clickable
        $dropdownAnchor.on('click', function (e) {
            e.stopPropagation();
            if ($dropdownAnchor.attr('target') == '_blank') {
                window.open(this.href);
                return false;
            } else {
                window.location = this.href;
            }
        });

        // Clear timeout to disable flickering
        $dropdownMenu.on('mouseover', function () {
            clearTimeout($dropdownMenuTimeout);
        });
    });

} //-- End oNavbarDropdown

$(document).ready(function () {

    $('.navbar li.dropdown').oDropdownHover();

    // Menu toggle effect
    $('.navbar-toggle').on('click', function () {
        $(this).toggleClass('active');
        $('.icon-bar').toggleClass('rotated');
    });

})