import { config } from "./config.js";
import { db, collection, addDoc, serverTimestamp } from "./firebase.js";
export async function guardarPedido(data) {
	if (!db) throw new Error("Firebase não configurado");
	try {
		const pedido = await addDoc(collection(db, "pedidos"), { ...data, estado: "novo", origem: "site", notaInterna: "", criadoEm: serverTimestamp() });
		if (window.emailjs && config.EMAILJS_SERVICE_ID !== "TODO") {
			try {
				await window.emailjs.send(config.EMAILJS_SERVICE_ID, config.EMAILJS_TEMPLATE_ID, { ...data }, { publicKey: config.EMAILJS_PUBLIC_KEY });
			} catch (error) { console.warn("Pedido guardado, mas o email de notificação falhou.", error); }
		}
		return pedido;
	} catch (error) {
		const wrapped = new Error(error?.code || "firebase-error");
		wrapped.code = error?.code;
		throw wrapped;
	}
}
