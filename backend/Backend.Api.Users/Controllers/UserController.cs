using Backend.Api.Users.Models.User;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Api.Users.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly IEnumerable<UserModel> users;

        public UserController()
        {
            users = Enumerable.Range(1, 50).Select(id => new UserModel
            (
                id,
                $"https://source.unsplash.com/random/200x200?sig={id}",
                $"FirstName {id}",
                "CustomLastName",
                new DateOnly(1950 + id, 01, 01),
                DateTime.Now,
                DateTime.Now
            ));
        }

        [HttpGet]
        public IActionResult Get()
        {
            return StatusCode(StatusCodes.Status200OK, users);
        }

        [HttpGet("{id}")]
        public IActionResult Get(long id)
        {
            var user = users.SingleOrDefault(user => user.Id == id);


            return user == null
                ? StatusCode(StatusCodes.Status404NotFound)
                : StatusCode(StatusCodes.Status200OK, user);
        }

        [HttpPost]
        public IActionResult Post(PostUserModel postUserModel)
        {
            Random rand = new Random();
            var newId = rand.Next(51, 1000);

            var newUser = new UserModel
            (
                newId,
                $"https://source.unsplash.com/random/200x200?sig={newId}",
                $"FirstName {newId}",
                "CustomLastName",
                new DateOnly(1950 + newId, 01, 01),
                DateTime.Now,
                DateTime.Now
            );


            return Created($"api/user/{newId}", newUser);
        }

        [HttpPut]
        public IActionResult Put(PutUserModel putUserModel)
        {
            return StatusCode(StatusCodes.Status200OK);
        }
    }
}
