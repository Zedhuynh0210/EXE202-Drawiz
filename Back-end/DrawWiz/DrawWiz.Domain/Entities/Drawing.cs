using System;
using System.Collections.Generic;

namespace DrawWiz.Domain.Entities;

public partial class Drawing
{
    public int DrawingId { get; set; }

    public int AlbumId { get; set; }

    public string ImageUrl { get; set; } = null!;

    public DateTime CreatedAt { get; set; }

    public virtual Album Album { get; set; } = null!;

    public virtual ICollection<FavoriteDrawing> FavoriteDrawings { get; set; } = new List<FavoriteDrawing>();
}
