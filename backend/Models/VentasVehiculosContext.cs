using Microsoft.EntityFrameworkCore;

namespace backend.Models
{
    public class VentasVehiculosContext : DbContext
    {
        public VentasVehiculosContext(DbContextOptions<VentasVehiculosContext> options) : base(options)
        {

        }

        public DbSet<Vehiculo> Vehiculos { get; set; }
        public DbSet<Cliente> Clientes { get; set; }
        public DbSet<Concesionario> Concesionarios { get; set; }
        public DbSet<Transaccion> Transacciones { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Transaccion>()
                .HasOne(t => t.Vehiculo)
                .WithMany()
                .HasForeignKey(t => t.VehiculoID);

            modelBuilder.Entity<Transaccion>()
                .HasOne(t => t.Cliente)
                .WithMany()
                .HasForeignKey(t => t.ClienteID);

            modelBuilder.Entity<Transaccion>()
                .HasOne(t => t.Concesionario)
                .WithMany()
                .HasForeignKey(t => t.ConcesionarioID);
        }
    }
}
