using Domain;
using System.Collections.Generic;

namespace BusinessServices
{
    public interface ITestDIService
    {
        IReadOnlyCollection<Customer> GetCustomers();        
    }
}
