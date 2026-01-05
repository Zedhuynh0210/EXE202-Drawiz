using DrawWiz.API.Configurations;
using DrawWiz.Application.Mapping;
using DrawWiz.Infrastructure;
using System.Text.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddApplication();
builder.Services.AddInfrastructure(builder.Configuration);

builder.Services.AddCorsConfiguration();

builder.Services.AddJwtAuthentication(builder.Configuration);
builder.Services.ConfigureOData();

builder.Services.AddControllers().AddJsonOptions(opts =>
{
    opts.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles;
    opts.JsonSerializerOptions.DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull;
});

builder.Services.AddAutoMapper(typeof(MappingProfile));

DocumentationConfig.Configure(builder.Services);

builder.Services.AddHttpContextAccessor();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(CorsConfig.ClientPolicy);

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
