(function ($) {
  ("use strict");

  //Header Search
  if ($(".search-btn").length) {
    $(".search-btn").on("click", function () {
      $("body").addClass("search-active");
    });
    $(".close-search").on("click", function () {
      $("body").removeClass("search-active");
    });
  }

  function headStyle() {
    if ($(".main-header").length) {
      var wind = $(window);
      var siteHeader = $(".main-header");
      var stickyHeader = $(".main-header .sticky-header");
      var scrollLink = $(".progress.hide");

      wind.on("scroll", function () {
        var scroll = wind.scrollTop();
        if (scroll > 180) {
          siteHeader.addClass("fixed-header");
          stickyHeader.addClass("animated slideInDown");
          scrollLink.addClass("animated slideInUp");
          scrollLink.fadeIn(200);
        } else {
          siteHeader.removeClass("fixed-header");
          stickyHeader.removeClass("animated slideInDown");
          scrollLink.removeClass("animated slideInUp");
          scrollLink.fadeOut(300);
        }
      });
    }
  }
  // Call the function when the document is ready
  $(document).ready(function () {
    headStyle();
  });

  //Submenu Dropdown Toggle
  if ($(".main-header .navigation li .sub-menu").length) {
    $(".main-header .navigation > li").append('<div class="dropdown-btn"><span class="fa fa-angle-right"></span></div>');
  }

  //Mobile Nav Hide Show
  if ($(".mobile-menu").length) {

    var mobileMenuContent = $(".main-header .nav-outer .main-menu").html();
    $(".mobile-menu .menu-box .menu-outer").append(mobileMenuContent);
    $(".sticky-header .main-menu").append(mobileMenuContent);

    //Dropdown Button
    $(".mobile-menu .navigation > li .dropdown-btn").on("click", function () {
      $(this).toggleClass("open");
      $(this).prev("ul").slideToggle(500);
    });
    //Menu Toggle Btn
    $(".mobile-nav-toggler").on("click", function () {
      $("body").addClass("mobile-menu-visible");
    });

    //Menu Toggle Btn
    $(".mobile-menu .menu-backdrop,.mobile-menu .close-btn").on("click", function () {
      $("body").removeClass("mobile-menu-visible");
    });
    $(document).keydown(function (e) {
      if (e.keyCode === 27) {
        $("#search-popup").removeClass("mobile-menu-visible");
        $("body").removeClass("mobile-menu-visible");
      }
    });
  }

  //Hidden Sidebar
  if ($(".hidden-bar").length) {
    var hiddenBar = $(".hidden-bar");
    var hiddenBarOpener = $(".max-nav-toggler .toggle-btn");
    var hiddenBarCloser = $(".hidden-bar-closer");

    // Your action on .hidden-bar-wrapper, for example:
    $(".hidden-bar-wrapper").on("click", function () {
      // Do something when .hidden-bar-wrapper is clicked
    });

    // Show Sidebar
    hiddenBarOpener.on("click", function () {
      hiddenBar.addClass("visible-sidebar");
    });

    // Hide Sidebar
    hiddenBarCloser.on("click", function () {
      hiddenBar.removeClass("visible-sidebar");
    });

    $(document).keydown(function (e) {
      if (e.keyCode === 27) {
        hiddenBar.removeClass("visible-sidebar");
      }
    });
  }


  // Banner Carousel
  $(".banner-carousel").owlCarousel({
    loop: true,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    autoplay: true,
    smartSpeed: 1500,
    autoplayTimeout: 6000,
    dots: false,
    nav: true,
    navText: ["<i class='fas fa-chevron-left''></i>", "<i class='fas fa-chevron-right''></i>"],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      768: {
        items: 1,
      },
      992: {
        items: 1,
      },
      1200: {
        items: 1,
      },
      1920: {
        items: 1,
      },
    },
  });

  // Testimonial
  $(".testi-list").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 10000,
    dots: false,
    nav: true,
    center: true,
    navText: ["<i class='fas fa-chevron-left''></i>", "<i class='fas fa-chevron-right''></i>"],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
        center: false,
      },
      992: {
        items: 3,
      },
      1200: {
        items: 3,
      },
      1920: {
        items: 3,
      },
    },
  });

  // Testimonial Home Two
  $(".testi-list2").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 10000,
    dots: false,
    nav: true,
    center: false,
    margin: 30,
    navText: ["<i class='fas fa-chevron-left''></i>", "<i class='fas fa-chevron-right''></i>"],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 2,
      },
      1200: {
        items: 2,
      },
      1920: {
        items: 2,
      },
    },
  });

  // Barnd Active

  $(".brand-list").owlCarousel({
    loop: true,
    autoplay: true,
    smartSpeed: 1500,
    autoplayTimeout: 1500,
    dots: false,
    nav: false,
    center: true,
    margin: 30,
    navText: ["<i class='bi bi-arrow-left''></i>", "<i class='bi bi-arrow-right''></i>"],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      768: {
        items: 3,
      },
      992: {
        items: 5,
      },
      1200: {
        items: 5,
      },
      1920: {
        items: 5,
      },
    },
  });

  /*  Cart Plus Minus Button
  /*----------------------------------------*/
  $(".ctnbutton").on("click", function () {
    var $button = $(this);
    var oldValue = $button.parent().find("input").val();
    if ($button.hasClass("inc")) {
      var newVal = parseFloat(oldValue) + 1;
    } else {
      // Don't allow decrementing below zero
      if (oldValue > 1) {
        var newVal = parseFloat(oldValue) - 1;
      } else {
        newVal = 1;
      }
    }
    $button.parent().find("input").val(newVal);
  });

  /*---------------------
  WOW active js 
  --------------------- */
  new WOW().init();

  // counterUp
  $(".counter").counterUp({
    delay: 5,
    time: 1500,
  });

  // Venubox
  $(".venobox").venobox({
    numeratio: true,

    infinigall: true,
  });

  /*--------------------------
   Accordin
  ---------------------------- */
  jQuery(document).ready(function ($) {
    "use strict";

    // =======< accordion js >========
    $(".accordion > li:eq(0) a").addClass("active").next().slideDown();
    $(".accordion a").on("click", function (j) {
      var dropDown = $(this).closest("li").find("p");

      $(this).closest(".accordion").find("p").not(dropDown).slideUp();

      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
      } else {
        $(this).closest(".accordion").find("a.active").removeClass("active");
        $(this).addClass("active");
      }

      dropDown.stop(false, true).slideToggle();

      j.preventDefault();
    });

    //=====< barfiller script >====

    //======< Custom Tab >======
    $(".tab ul.tabs").addClass("active").find("> li:eq(0)").addClass("current");

    $(".tab ul.tabs li a").on("click", function (g) {
      var tab = $(this).closest(".tab"),
        index = $(this).closest("li").index();

      tab.find("ul.tabs > li").removeClass("current");
      $(this).closest("li").addClass("current");

      tab
        .find(".tab_content")
        .find("div.tabs_item")
        .not("div.tabs_item:eq(" + index + ")")
        .slideUp();
      tab
        .find(".tab_content")
        .find("div.tabs_item:eq(" + index + ")")
        .slideDown();

      g.preventDefault();
    });
  });

  // widget categories menu
  $(document).ready(function () {
    $(".widget-categories-menu ul, .sidebar-tag-item ul").on("mouseenter", "li", function () {
      $(this).addClass("active").siblings().removeClass("active");
    });
  });

  // scroll up
  let scrollPercentage = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);

    progressValue.textContent = `${scrollValue}`;

    // Show/hide progress bar based on scroll position
    if (pos > 20) {
      scrollProgress.classList.remove("hide");
      scrollProgress.classList.add("show");
    } else {
      scrollProgress.classList.remove("show");
      scrollProgress.classList.add("hide");
    }

    // Add event listener to scroll to top when progress bar is clicked
    scrollProgress.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  };

  window.onscroll = scrollPercentage;
  window.onload = scrollPercentage;

  // Toggole JS
  $(document).ready(function () {
    // Language Toggle
    $(".language").click(function () {
      $(this).toggleClass("active");
    });

    // Team Share
    $(".team-share").on("click", function () {
      $(this).toggleClass("active");
      $(".team-share").not(this).removeClass("active");
    });

    // Heart Active
    $(".heart, .favourite").click(function () {
      $(this).toggleClass("focus");
    });
  });

  /* Product Quantity & Shop Details Quantity*/
  const elements = document.querySelectorAll(".product-quantity-count, .category-count-button, .qty-btn, .ctnbutton");

  elements.forEach((element) => {
    element.addEventListener("click", function (e) {
      e.preventDefault();

      const btn = e.target; // Clicked button
      const box = btn.parentElement.querySelector(".product-quantity-box, .cart-plus-minus-box");

      if (btn.classList.contains("inc")) {
        box.value = Number(box.value) + 1;
      } else if (btn.classList.contains("dec") && Number(box.value) > 1) {
        box.value = Number(box.value) - 1;
      }
    });
  });

  // Price Range bar


  /* Shopping Form Toggle */
  if ($("[data-toggle-shipping]").length) {
    const $shippingToggle = $("[data-toggle-shipping]"),
      $shippingToggleTarget = $($shippingToggle[0].dataset.toggleShipping),
      $shippingShowHide = function () {
        if ($shippingToggle[0].checked) {
          $shippingToggleTarget.slideDown();
        } else {
          $shippingToggleTarget.slideUp();
        }
      };
    $shippingShowHide();
    $shippingToggle.on("change", function () {
      $shippingShowHide();
    });
  }

  /* Payment Method Toggle */
  if ($('input[type="radio"][name="payment-method"]').length) {
    const $paymentToggle = $('input[type="radio"][name="payment-method"]'),
      $paymentShowHide = function () {
        $paymentToggle.each(function () {
          const $this = $(this),
            $thisContent = $this.siblings("p");
          if ($this[0].checked) {
            $thisContent.slideDown();
            $this.parent().siblings().find("p").slideUp();
          }
        });
      };
    $paymentShowHide();
    $paymentToggle.on("change", function () {
      $paymentShowHide();
    });
  }


  // Select Menu
  $(".select-menu").selectmenu();

  // Shop To Pop Up
  $(document).ready(function () {
    function handleConfirmation(message, callback) {
      showConfirm(message, function (result) {
        if (result) {
          console.log("You pressed Yes.");
        } else {
          console.log("You pressed No.");
        }
        if (callback) {
          callback(result);
        }
      });
    }

    $(".whiteListConfirm").on("click", function () {
      handleConfirmation("Do you want to add to white list ?", function (result) {});
    });

    $(".cartConfirm").on("click", function () {
      handleConfirmation("Do you want to add to Cart list ?", function (result) {
        if (result) {
          window.location.href = "cart.html";
        }
      });
    });
  });

  /*------------- preloader js --------------*/
  var percentage = 0;
  var LoadingCounter = setInterval(function () {
    if (percentage <= 100) {
      // $('#loading-screen ').css('opacity', (100 - percentage));
      $("#loading-screen .loading-counter").text(percentage + "%");
      $("#loading-screen .bar").css("width", (100 - percentage) / 2 + "%");
      $("#loading-screen .progress-line").css("transform", "scale(" + percentage / 100 + ")");
      percentage++;
    } else {
      $("#loading-screen").fadeOut(500);
      setTimeout(() => {
        $("#loading-screen").remove();
      }, 500);
      clearInterval(LoadingCounter);
    }
  }, 10);
  /*-----------------  End preloader jS -----------------  */

  function showConfirm(message, callback) {
    let confirmBox = document.createElement("div");
    confirmBox.classList.add("confirm-box");

    let messageBox = document.createElement("div");
    messageBox.classList.add("message-box");
    messageBox.textContent = message;
    confirmBox.appendChild(messageBox);

    let buttonBox = document.createElement("div");
    buttonBox.classList.add("button-box");
    messageBox.appendChild(buttonBox);

    let yesButton = document.createElement("button");
    yesButton.classList.add("yes-button");
    yesButton.textContent = "Yes";
    buttonBox.appendChild(yesButton);
    yesButton.addEventListener("click", YesButtonClick);

    let noButton = document.createElement("button");
    noButton.classList.add("no-button");
    noButton.textContent = "No";
    buttonBox.appendChild(noButton);
    noButton.addEventListener("click", NoButtonClick);

    function removeConfirmBox() {
      document.body.removeChild(confirmBox);
    }

    function YesButtonClick() {
      callback(true);
      removeConfirmBox();
    }

    function NoButtonClick() {
      callback(false);
      removeConfirmBox();
    }

    document.body.appendChild(confirmBox);
  }

  /*--
        Ajax Contact Form
  -----------------------------------*/
  document.addEventListener("DOMContentLoaded", function () {
    function handleFormSubmission(form, statusElement, formIndex) {
      form.addEventListener("submit", function (ev) {
        ev.preventDefault();
        var data = new FormData(form);
        sendAjaxRequest(
          "POST",
          form.action,
          data,
          function (response) {
            handleSuccess(response, statusElement, formIndex);
          },
          function (statusCode, responseText) {
            handleError(statusCode, responseText, statusElement, formIndex);
          }
        );
      });
    }

    function handleSuccess(response, statusElement, formIndex) {
      forms[formIndex].reset();
      statusElement.classList.add("success");
      statusElement.innerHTML = '<i class="far fa-check-circle"></i> Thank you message sent.';
      // You can do something with the response from the server if needed.
    }

    function handleError(statusCode, responseText, statusElement, formIndex) {
      statusElement.classList.add("error");
      statusElement.innerHTML = '<i class="far fa-times-circle"></i> Oops! There was a problem.';
      // You can display more specific error information if needed.
    }

    function sendAjaxRequest(method, url, data, successCallback, errorCallback) {
      var xhr = new XMLHttpRequest();
      xhr.open(method, url);
      xhr.setRequestHeader("Accept", "application/json");
      xhr.onreadystatechange = function () {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
          successCallback(xhr.response);
        } else {
          errorCallback(xhr.status, xhr.responseText);
        }
      };
      xhr.send(data);
    }

    var forms = document.querySelectorAll(".dreamit-form, .calculate-form, .subscribe-form");
    var statuses = document.querySelectorAll(".status, .status2, .status3");

    forms.forEach(function (form, index) {
      handleFormSubmission(form, statuses[index], index);
    });
  });

  //Datepicker
  if ($(".datepicker").length) {
    $(".datepicker").datepicker();
  }

  //Custom Quantity Spinner
  if ($(".quantity-spinner").length) {
    $(".quantity-spinner .plus").on("click", function () {
      var val = $(this).prev(".prod_qty").val();
      $(this)
        .prev(".prod_qty")
        .val(val * 1 + 1);
    });

    $(".quantity-spinner .minus").on("click", function () {
      var val = $(this).next(".prod_qty").val();
      if (val != 1) {
        $(this)
          .next(".prod_qty")
          .val(val * 1 - 1);
      }
    });
  }

  //Date Time Picker
  if ($(".datetime-picker").length) {
    $(".datetime-picker").datetimepicker({
      formatDate: "Y/m/d",
      minDate: "-2020/01/01", // yesterday is minimum date
      maxDate: "+2030/12/30", // and tommorow is maximum date calendar
    });
  }
})(jQuery);

