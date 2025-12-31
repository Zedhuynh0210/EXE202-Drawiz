using System;
using System.Collections.Generic;

namespace DrawWiz.Domain.Entities;

public partial class Album
{
    public int AlbumId { get; set; }

    public int? OwnerUserId { get; set; }

    public int? ChildId { get; set; }

    public string AlbumType { get; set; } = null!;

    public string Title { get; set; } = null!;

    public DateTime CreatedAt { get; set; }

    public virtual ChildAccount? Child { get; set; }

    public virtual ICollection<Drawing> Drawings { get; set; } = new List<Drawing>();

    public virtual User? OwnerUser { get; set; }
}
