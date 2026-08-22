// VALIDACIÓN DEL CLIENTE REQUERIDA antes de publicar información comercial.
export const site={
  name:"TORQ Texcoco",shortName:"TORQ.",tagline:"Taller automotriz",canonical:"https://tallermecanico.vercel.app",
  phone:"",phoneDisplay:"Teléfono por confirmar",whatsapp:"",email:"",address:"Ubicación exacta por confirmar",hours:"Horario por confirmar",mapsUrl:"",
  social:{facebook:"",instagram:""},
  coverage:["Texcoco","CDMX zona oriente","Nezahualcóyotl","Chimalhuacán","Ecatepec","Chicoloapan","Los Reyes","Ixtapaluca"],
  services:[
    {title:"Mecánica general",desc:"Mantenimiento preventivo, sistema de enfriamiento, bandas y reparación multimarca.",icon:"wrench"},
    {title:"Afinación y cambio de aceite",desc:"Servicio periódico con revisión de niveles, filtros y puntos esenciales de seguridad.",icon:"oil"},
    {title:"Frenos y suspensión",desc:"Balatas, discos, amortiguadores, dirección y revisión para recuperar seguridad y estabilidad.",icon:"wheel"},
    {title:"Diagnóstico electrónico",desc:"Escáner automotriz, testigos, sensores y detección precisa antes de cambiar piezas.",icon:"scan"},
    {title:"Sistema eléctrico",desc:"Batería, alternador, marcha, luces, cableado y fallas eléctricas del vehículo.",icon:"bolt"},
    {title:"Servicio y asistencia móvil",desc:"Revisión inicial y atención programada dentro de la zona de cobertura confirmada.",icon:"car"}
  ],
  testimonials:[
    {quote:"Me explicaron la falla con evidencia y respetaron el presupuesto acordado.",author:"Testimonio de muestra · Por validar"},
    {quote:"El diagnóstico encontró el origen antes de cambiar piezas innecesarias.",author:"Testimonio de muestra · Por validar"},
    {quote:"Atención ordenada y comunicación clara durante todo el servicio.",author:"Testimonio de muestra · Por validar"}
  ],
  faq:[
    {q:"¿Necesito hacer cita?",a:"Recomendamos agendar para reservar espacio. La disponibilidad del día se confirma directamente con el taller."},
    {q:"¿Reparan cualquier marca de vehículo?",a:"La cobertura multimarca debe confirmarse indicando marca, modelo, año y tipo de falla."},
    {q:"¿Dan garantía sobre las reparaciones?",a:"Las condiciones dependen del trabajo y las refacciones. Deben quedar por escrito en la orden de servicio."},
    {q:"¿Pueden ir hasta mi ubicación?",a:"La asistencia móvil depende del servicio, zona y disponibilidad. Comparte tu ubicación para confirmarlo."},
    {q:"¿Cuánto cuesta el diagnóstico?",a:"Depende de la falla y las pruebas requeridas. El alcance y precio se informan antes de comenzar."}
  ]
} as const;
export const whatsappUrl=(message:string)=>site.whatsapp?`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`:null;
