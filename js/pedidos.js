import { db, collection, addDoc, serverTimestamp } from "./firebase.js";
export async function guardarPedido(data) {
	if (!db) throw new Error("Firebase não configurado");
	try {
		return await addDoc(collection(db, "pedidos"), { ...data, estado: "novo", origem: "site", notaInterna: "", criadoEm: serverTimestamp() });
	} catch (error) {
		const wrapped = new Error(error?.code || "firebase-error");
		wrapped.code = error?.code;
		throw wrapped;
	}
}
