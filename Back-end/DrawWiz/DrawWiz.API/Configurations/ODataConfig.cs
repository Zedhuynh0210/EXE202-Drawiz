using Microsoft.AspNetCore.OData;
using Microsoft.OData.Edm;
using Microsoft.OData.ModelBuilder;

namespace DrawWiz.API.Configurations
{
    public static class ODataConfig
    {
        public static void ConfigureOData(this IServiceCollection services)
        {
            services.AddControllers()
                   .AddOData(options =>
                   {
                       options.Select().Filter().OrderBy().Expand().Count().SetMaxTop(100);
                   });

        }
    }
}
