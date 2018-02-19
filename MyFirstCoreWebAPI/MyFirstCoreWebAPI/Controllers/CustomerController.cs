using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BusinessServices;
using DomainModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MyFirstCoreWebAPI.Controllers
{
    [Produces("application/json")]
    [Route("api/Customer")]
    public class CustomerController : Controller
    {
        private ICustomerService _testDIService;

        public CustomerController(ICustomerService testDIService)
        {
            this._testDIService = testDIService;
        }

        // GET: api/Customer
        [HttpGet]
        public IEnumerable<Customer> Get()
        {
            var customers = this._testDIService.GetCustomers();

            //return this.Ok(customers);

            return customers;
        }

        // GET: api/Customer/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }
        
        // POST: api/Customer
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }
        
        // PUT: api/Customer/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }
        
        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
