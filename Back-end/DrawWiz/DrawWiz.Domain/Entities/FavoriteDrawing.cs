using System;
using System.Collections.Generic;

namespace DrawWiz.Domain.Entities;

public partial class FavoriteDrawing
{
    public int UserId { get; set; }

    public int DrawingId { get; set; }

    public DateTime CreatedAt { get; set; }

    public virtual Drawing Drawing { get; set; } = null!;

    public virtual User User { get; set; } = null!;
}
