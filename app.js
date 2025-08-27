import { db } from './firebase-config.js';
import { collection, addDoc, serverTimestamp, query, orderBy, onSnapshot, updateDoc, doc } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";

// Reference to alerts collection
const alertsRef = collection(db, 'alerts');

// SOS button logic
const sosBtn = document.getElementById('sosBtn');
const status = document.getElementById('status');

if (sosBtn) {
  sosBtn.addEventListener('click', async () => {
    try {
      await addDoc(alertsRef, {
        timestamp: serverTimestamp(),
        status: 'active',
        location: 'Unknown'
      });
      status.textContent = "SOS Alert Sent!";
      status.style.color = "#0ff";
    } catch (err) {
      console.error(err);
      status.textContent = "Error sending alert!";
      status.style.color = "#f00";
    }
  });
}

// Real-time dashboard listener
const alertsList = document.getElementById('alertsList');
if (alertsList) {
  const q = query(alertsRef, orderBy('timestamp', 'desc'));
  onSnapshot(q, (snapshot) => {
    alertsList.innerHTML = '';
    snapshot.forEach(docItem => {
      const alert = docItem.data();
      const li = document.createElement('li');
      const time = alert.timestamp?.toDate().toLocaleTimeString() || "Just now";
      li.textContent = `[${time}] Status: ${alert.status} | Location: ${alert.location}`;
      li.style.color = "#0ff";
      alertsList.appendChild(li);
    });
  });
}

// Admin page logic
const adminList = document.getElementById('adminList');
if (adminList) {
  const q = query(alertsRef, orderBy('timestamp', 'desc'));
  onSnapshot(q, (snapshot) => {
    adminList.innerHTML = '';
    snapshot.forEach(docItem => {
      const alert = docItem.data();
      const li = document.createElement('li');
      const time = alert.timestamp?.toDate().toLocaleString() || "Just now";
      li.innerHTML = `[${time}] Status: ${alert.status} | Location: ${alert.location} <button data-id="${docItem.id}">Resolve</button>`;
      li.style.color = "#0ff";
      adminList.appendChild(li);

      const btn = li.querySelector('button');
      btn.addEventListener('click', async () => {
        await updateDoc(doc(db, 'alerts', docItem.id), { status: 'resolved' });
      });
    });
  });
}

// Report page logic
const reportList = document.getElementById('reportList');
if (reportList) {
  const q = query(alertsRef, orderBy('timestamp', 'desc'));
  onSnapshot(q, (snapshot) => {
    reportList.innerHTML = '';
    snapshot.forEach(docItem => {
      const alert = docItem.data();
      const li = document.createElement('li');
      const time = alert.timestamp?.toDate().toLocaleString() || "Just now";
      li.textContent = `[${time}] Status: ${alert.status} | Location: ${alert.location}`;
      li.style.color = "#0ff";
      reportList.appendChild(li);
    });
  });
                                                                        }
