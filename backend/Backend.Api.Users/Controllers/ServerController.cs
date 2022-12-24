using Backend.Api.Models.Server;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using System.Net;

namespace Backend.Api.Users.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ServerController : ControllerBase
    {
        [HttpGet("info")]
        public IActionResult ServerInfo()
        {
            IPHostEntry ipHostInfo = Dns.GetHostEntry(Dns.GetHostName()); // `Dns.Resolve()` method is deprecated.
            IPAddress ipAddress = ipHostInfo.AddressList[0];

            var strAddresses = ipHostInfo.AddressList.Select(addr => addr.ToString());

            ServerInfo info = new(strAddresses);

            return StatusCode(StatusCodes.Status200OK, info);
        }
    }
}
