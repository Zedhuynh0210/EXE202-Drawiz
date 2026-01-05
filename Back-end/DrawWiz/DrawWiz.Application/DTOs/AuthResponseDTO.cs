using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DrawWiz.Application.DTOs
{
    public class AuthResponseDTO
    {
        public string AccessToken { get; set; } = null!;
        public UserDTO User { get; set; } = null!;
    }
}
