using EX6_63010417.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace EX6_63010417.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Form01Handle(string fname, string lname, string email,string height,string lastans)
        {
            ViewBag.fname = fname;
            ViewBag.lname = lname;
            ViewBag.email = email; 
            ViewBag.height = height;
            ViewBag.lastans = lastans;

            return View();
        }
    }
}