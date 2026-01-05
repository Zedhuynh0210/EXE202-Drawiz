using DrawWiz.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace DrawWiz.Infrastructure.Persistence;

public partial class DrawWizDbContext : DbContext
{
    public DrawWizDbContext()
    {
    }

    public DrawWizDbContext(DbContextOptions<DrawWizDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Album> Albums { get; set; }

    public virtual DbSet<ChildAccount> ChildAccounts { get; set; }

    public virtual DbSet<Drawing> Drawings { get; set; }

    public virtual DbSet<FavoriteDrawing> FavoriteDrawings { get; set; }

    public virtual DbSet<PlanTarget> PlanTargets { get; set; }

    public virtual DbSet<Role> Roles { get; set; }

    public virtual DbSet<SubscriptionPlan> SubscriptionPlans { get; set; }

    public virtual DbSet<User> Users { get; set; }

    public virtual DbSet<UserSubscription> UserSubscriptions { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Album>(entity =>
        {
            entity.HasKey(e => e.AlbumId).HasName("PK__Albums__97B4BE37F83E03C1");

            entity.HasIndex(e => e.ChildId, "IX_Albums_ChildId");

            entity.HasIndex(e => e.OwnerUserId, "IX_Albums_OwnerUserId");

            entity.Property(e => e.AlbumType).HasMaxLength(50);
            entity.Property(e => e.CreatedAt).HasDefaultValueSql("(getdate())");
            entity.Property(e => e.Title).HasMaxLength(100);

            entity.HasOne(d => d.Child).WithMany(p => p.Albums)
                .HasForeignKey(d => d.ChildId)
                .HasConstraintName("FK__Albums__ChildId__571DF1D5");

            entity.HasOne(d => d.OwnerUser).WithMany(p => p.Albums)
                .HasForeignKey(d => d.OwnerUserId)
                .HasConstraintName("FK__Albums__OwnerUse__5629CD9C");
        });

        modelBuilder.Entity<ChildAccount>(entity =>
        {
            entity.HasKey(e => e.ChildId).HasName("PK__ChildAcc__BEFA07163D1BD524");

            entity.Property(e => e.AvatarUrl).HasMaxLength(500);
            entity.Property(e => e.ChildName).HasMaxLength(100);
            entity.Property(e => e.CreatedAt).HasDefaultValueSql("(getdate())");
            entity.Property(e => e.IsActive).HasDefaultValue(true);

            entity.HasOne(d => d.ParentUser).WithMany(p => p.ChildAccounts)
                .HasForeignKey(d => d.ParentUserId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__ChildAcco__Paren__4CA06362");
        });

        modelBuilder.Entity<Drawing>(entity =>
        {
            entity.HasKey(e => e.DrawingId).HasName("PK__Drawings__987F0B22CA00481A");

            entity.HasIndex(e => e.AlbumId, "IX_Drawings_AlbumId");

            entity.Property(e => e.CreatedAt).HasDefaultValueSql("(getdate())");
            entity.Property(e => e.ImageUrl).HasMaxLength(500);

            entity.HasOne(d => d.Album).WithMany(p => p.Drawings)
                .HasForeignKey(d => d.AlbumId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Drawings__AlbumI__5AEE82B9");
        });

        modelBuilder.Entity<FavoriteDrawing>(entity =>
        {
            entity.HasKey(e => new { e.UserId, e.DrawingId }).HasName("PK__Favorite__2E0F3CFE7028DF0D");

            entity.Property(e => e.CreatedAt).HasDefaultValueSql("(getdate())");

            entity.HasOne(d => d.Drawing).WithMany(p => p.FavoriteDrawings)
                .HasForeignKey(d => d.DrawingId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__FavoriteD__Drawi__5FB337D6");

            entity.HasOne(d => d.User).WithMany(p => p.FavoriteDrawings)
                .HasForeignKey(d => d.UserId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__FavoriteD__UserI__5EBF139D");
        });

        modelBuilder.Entity<PlanTarget>(entity =>
        {
            entity.HasKey(e => e.TargetId).HasName("PK__PlanTarg__2B1F0F96FAE8E27A");

            entity.HasIndex(e => e.TargetType, "UQ__PlanTarg__264878A104D913F4").IsUnique();

            entity.Property(e => e.TargetType).HasMaxLength(20);
        });

        modelBuilder.Entity<Role>(entity =>
        {
            entity.HasKey(e => e.RoleId).HasName("PK__Roles__8AFACE1A74E8F3BA");

            entity.HasIndex(e => e.RoleName, "UQ__Roles__8A2B6160119D78B7").IsUnique();

            entity.Property(e => e.Description).HasMaxLength(255);
            entity.Property(e => e.RoleName).HasMaxLength(50);
        });

        modelBuilder.Entity<SubscriptionPlan>(entity =>
        {
            entity.HasKey(e => e.PlanId).HasName("PK__Subscrip__755C22B7B8D43DA4");

            entity.Property(e => e.Features).HasMaxLength(500);
            entity.Property(e => e.PlanName).HasMaxLength(50);
            entity.Property(e => e.Price).HasColumnType("decimal(10, 2)");

            entity.HasOne(d => d.Target).WithMany(p => p.SubscriptionPlans)
                .HasForeignKey(d => d.TargetId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Subscript__Targe__47DBAE45");
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.UserId).HasName("PK__Users__1788CC4C984B3AA9");

            entity.HasIndex(e => e.Email, "IX_Users_Email");

            entity.HasIndex(e => e.Username, "UQ__Users__536C85E4A35E4332").IsUnique();

            entity.HasIndex(e => e.Email, "UQ__Users__A9D10534D0EE380D").IsUnique();

            entity.Property(e => e.AvatarUrl).HasMaxLength(500);
            entity.Property(e => e.CreatedAt).HasDefaultValueSql("(getdate())");
            entity.Property(e => e.Email).HasMaxLength(255);
            entity.Property(e => e.IsActive).HasDefaultValue(true);
            entity.Property(e => e.PasswordHash).HasMaxLength(255);
            entity.Property(e => e.Username).HasMaxLength(50);

            entity.HasMany(d => d.Roles).WithMany(p => p.Users)
                .UsingEntity<Dictionary<string, object>>(
                    "UserRole",
                    r => r.HasOne<Role>().WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.ClientSetNull)
                        .HasConstraintName("FK__UserRoles__RoleI__4222D4EF"),
                    l => l.HasOne<User>().WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.ClientSetNull)
                        .HasConstraintName("FK__UserRoles__UserI__412EB0B6"),
                    j =>
                    {
                        j.HasKey("UserId", "RoleId").HasName("PK__UserRole__AF2760AD0D5B755C");
                        j.ToTable("UserRoles");
                    });
        });

        modelBuilder.Entity<UserSubscription>(entity =>
        {
            entity.HasKey(e => e.SubscriptionId).HasName("PK__UserSubs__9A2B249D1D23673E");

            entity.Property(e => e.IsActive).HasDefaultValue(true);

            entity.HasOne(d => d.Child).WithMany(p => p.UserSubscriptions)
                .HasForeignKey(d => d.ChildId)
                .HasConstraintName("FK__UserSubsc__Child__5165187F");

            entity.HasOne(d => d.Plan).WithMany(p => p.UserSubscriptions)
                .HasForeignKey(d => d.PlanId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__UserSubsc__PlanI__52593CB8");

            entity.HasOne(d => d.User).WithMany(p => p.UserSubscriptions)
                .HasForeignKey(d => d.UserId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__UserSubsc__UserI__5070F446");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
