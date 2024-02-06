using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using backend.Models;


namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VentasController : ControllerBase
    {
        private readonly VentasVehiculosContext _context;
        public VentasController(VentasVehiculosContext context) { _context = context; }

        //GET: api/Ventas
        [HttpGet] 
        public async Task<ActionResult<IEnumerable<Transaccion>>> GetTransacciones()
        {
            try
            {
                return await _context.Transacciones.ToListAsync();
            }
            catch (Exception ex)
            {
                // Log the exception or return a specific error message
                return StatusCode(500, $"Internal Server Error: {ex.Message}");
            }
        }
        //GET: api/Ventas/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Transaccion>> GetTransaction(int id)
        {
            var transaction = await _context.Transacciones.FindAsync(id);
            if(transaction == null) 
            {
                return NotFound();
            }
            return transaction;
        }

        //POST: api/Ventas
        [HttpPost]
        public async Task<ActionResult<Transaccion>> PostTransaction(Transaccion transaccion)
        {
            _context.Transacciones.Add(transaccion);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTransaction", new { id = transaccion.TransaccionID }, transaccion);   
        }

        // PUT: api/Ventas/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTransaccion(int id, Transaccion transaccion)
        {
            if (id != transaccion.TransaccionID)
            {
                return BadRequest();
            }

            _context.Entry(transaccion).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TransaccionExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // DELETE: api/Ventas/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTransaccion(int id)
        {
            var transaccion = await _context.Transacciones.FindAsync(id);
            if (transaccion == null)
            {
                return NotFound();
            }

            _context.Transacciones.Remove(transaccion);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TransaccionExists(int id)
        {
            return _context.Transacciones.Any(e => e.TransaccionID == id);
        }
    }
}