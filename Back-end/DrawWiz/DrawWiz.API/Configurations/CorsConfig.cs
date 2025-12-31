namespace DrawWiz.API.Configurations
{
    public static class CorsConfig
    {
        public const string ClientPolicy = "ClientPolicy";

        public static IServiceCollection AddCorsConfiguration(
            this IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddPolicy(ClientPolicy, policy =>
                {
                    policy
                        .AllowAnyOrigin()
                        .AllowAnyMethod()
                        .AllowAnyHeader();
                });
            });

            return services;
        }
    }
}
