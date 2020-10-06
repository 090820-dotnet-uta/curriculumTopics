using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CalculatorAClient.ServiceReference1;

namespace CalculatorAClient
{
	class Program
	{
		static void Main(string[] args)
		{
			//create an instance of the service (that .NET Framework created for you)
			CalculatorClient client = new CalculatorClient();

			var result1 = client.Add(5.5, 6.6);
			Console.WriteLine($"IN CLIENT => The result of the Add method is {result1}");

			var result2 = client.Subtract(5.5, 6.6);
			Console.WriteLine($"IN CLIENT => The result of the Subtract method is {result2}"); 
			
			var result3 = client.Multiply(5.5, 6.6);
			Console.WriteLine($"IN CLIENT => The result of the Multiply method is {result3}"); 
			
			var result4 = client.Divide(5.5, 6.6);
			Console.WriteLine($"IN CLIENT => The result of the Divide method is {result4}");

			// Step 3: Close the client to gracefully close the connection and clean up resources.
			Console.WriteLine("\n\tPress <Enter> to terminate the client.\n");
			Console.ReadLine();
			client.Close();
		}
	}
}
