using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace MyFirstCoreWebAPI.Controllers
{
    [Route("api/[controller]")]
    public class ValuesController : Controller
    {
        // GET api/values
        [HttpGet]
        [Produces(typeof(IEnumerable<Value>))]
        public IEnumerable<Value> Get()
        {
            return new Value[] {
                new Value { Id = 1, Text = "FirstOne" },
                new Value { Id = 2, Text = "SecondOne" }};
        }

        // GET api/values/5
        /// <summary>
        /// THis is somestuff
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet("{id:int}")]        
        public Value Get(int id)
        {
            return new Value { Id = id, Text = "On its own" };
        }

        // POST api/values
        [HttpPost]
        [Produces(typeof(Value))]
        public IActionResult Post([FromBody]Value value)
        {
            // return 201, location header URI of created object and the object itself            
            return this.CreatedAtAction(nameof(this.Get), new { id = value.Id }, value);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }

        public class Value
        {
            public int Id { get; set; }

            public string Text { get; set; }
        }
    }
}
