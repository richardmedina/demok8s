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
            users = Enumerable.Range(1, 50).Select(value => new UserModel
            {
                Id = value,
                GotchiUrl = $"https://source.unsplash.com/random/200x200?sig={value}",
                FirstName = $"FirstName {value}",
                LastName = "CustomLastName",
                DateOfBirth = new DateOnly(1950 + value, 01, 01),
                CreatedDate = DateTime.Now,
                ModifiedDate = DateTime.Now
            });
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
            {
                Id = newId,
                FirstName = $"FirstName {newId}",
                LastName = "CustomLastName",
                DateOfBirth = new DateOnly(1950 + newId, 01, 01),
                CreatedDate = DateTime.Now,
                ModifiedDate = DateTime.Now
            };


            return Created($"api/user/{newId}", newUser);
        }

        [HttpPut]
        public IActionResult Put(PutUserModel putUserModel)
        {
            return StatusCode(StatusCodes.Status200OK);
        }
    }
}
