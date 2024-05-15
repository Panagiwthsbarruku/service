function showAlert(event) {
    event.preventDefault(); // Ακύρωση της προεπιλεγμένης συμπεριφοράς υποβολής της φόρμας
    document.getElementById("message").style.display = "block"; // Εμφάνιση του μηνύματος
    return false; // Επιστροφή false για να ακυρωθεί η υποβολή της φόρμας
}
