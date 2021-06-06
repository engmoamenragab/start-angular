//! variables
declare let $: any;
//!imports
import { Component, OnInit } from "@angular/core";
//! decorator
@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
//! class
export class NavbarComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    let navbarShrink = function () {
      if ($(".navbar").offset().top > 50) {
        $(".navbar").addClass("navbar__shrink");
      } else {
        $(".navbar").removeClass("navbar__shrink");
      }
    };
    $(window).scroll(navbarShrink);
  }
}
