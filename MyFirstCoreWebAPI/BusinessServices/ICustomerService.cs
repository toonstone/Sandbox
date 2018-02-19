using DomainModels;
using System.Collections.Generic;

namespace BusinessServices
{
    public interface ICustomerService
    {
        IReadOnlyCollection<Customer> GetCustomers();        
    }
}
