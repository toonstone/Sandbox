using Domain;
using System;
using System.Collections.Generic;

namespace BusinessServices
{
    public class TestDIService : ITestDIService
    {
        private Customer[] _customerRepoGetCustomers;

        public TestDIService()
        {
            this._customerRepoGetCustomers = new Customer[]
            {
                new Customer { ID = 1, DateOfBirth = new DateTime(1971, 07, 29)},
                new Customer { ID = 2, DateOfBirth = new DateTime(1976, 09, 30)},
                new Customer { ID = 3, DateOfBirth = new DateTime(2006, 06, 09)},
                new Customer { ID = 4, DateOfBirth = new DateTime(2007, 10, 01)}
            };
        }

        public IReadOnlyCollection<Customer> GetCustomers()
        {
            return this._customerRepoGetCustomers;
        }
    }
}
