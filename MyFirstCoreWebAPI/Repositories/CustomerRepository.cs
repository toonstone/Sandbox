using System;
using System.Collections.Generic;
using System.Text;
using DomainModels;

namespace Repositories
{
    public class CustomerRepository : ICustomerRepository
    {        
        public CustomerRepository()
        {

        }

        public IReadOnlyCollection<Customer> GetCustomers()
        {
            throw new NotImplementedException();
        }
    }
}
