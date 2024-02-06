namespace backend.Models
{
    public class Transaccion
    {
        public int TransaccionID { get; set; }

        public int VehiculoID { get; set; }

        public int ClienteID { get; set; }

        public int ConcesionarioID { get; set; }

        public DateTime FechaVenta { get; set; }
        public decimal PrecioVenta { get; set; }
    }

}
