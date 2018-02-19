using DomainModels;
using System;
using System.Collections.Generic;
using System.Text;

namespace Repositories
{
    public interface ICustomerRepository
    {
        IReadOnlyCollection<Customer> GetCustomers();
    }
}
