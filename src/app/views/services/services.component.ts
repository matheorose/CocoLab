import { Component } from '@angular/core';
import { NgIf, NgFor, CommonModule } from '@angular/common'; // Importez CommonModule pour NgIf et NgFor

// Définissez une interface pour la structure des données de service
interface ServiceInfo {
  name: string;
  description: string;
  details: string[]; // Liste de points clés/détails
}

@Component({
  selector: 'app-services',
  // Ajoutez NgIf et NgFor dans les imports pour les utiliser dans le template
  imports: [CommonModule],
  standalone: true, // Ajoutez standalone si ce n'est pas déjà fait
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  // État de la modale
  isModalOpen: boolean = false;
  // Service actuellement sélectionné (peut être null si la modale est fermée)
  selectedService: ServiceInfo | null = null;

  // Données des services avec des détails pour la modale
  servicesData: ServiceInfo[] = [
    {
      name: 'Sites web & apps',
      description: 'Sites vitrines, e-commerce, applications web performantes et optimisées.',
      details: [
        'Développement Front-end (Angular, React)',
        'Solutions E-commerce (Shopify, Custom)',
        'Optimisation SEO et Performance',
        'Design Responsive (Mobile-First)'
      ]
    },
    {
      name: 'Intelligence Artificielle',
      description: 'Implémentation de solutions d’IA pour la productivité et l\'analyse.',
      details: [
        'Chatbots et assistants virtuels (LLMs)',
        'Modèles de prédiction et d\'apprentissage automatique',
        'Analyse et visualisation de données',
        'Automatisation des processus par l\'IA'
      ]
    },
    {
      name: 'Applications mobiles',
      description: 'Création d\'applications pour iOS et Android, natives ou hybrides.',
      details: [
        'Développement Natif (Swift/Kotlin)',
        'Développement Hybride (Flutter, React Native)',
        'Intégration des fonctionnalités du téléphone (GPS, Caméra)',
        'Soumission aux App Stores (Apple App Store, Google Play)'
      ]
    },
    {
      name: 'API & backends',
      description: 'Conception et développement d\'architectures backend robustes et sécurisées.',
      details: [
        'Développement d\'API RESTful et GraphQL',
        'Bases de données (SQL, NoSQL)',
        'Authentification et Sécurité des données',
        'Architecture cloud (AWS, Azure, Google Cloud)'
      ]
    },
    {
      name: 'Automatisation & No-code',
      description: 'Mise en place de workflows automatisés pour gagner du temps et réduire les erreurs.',
      details: [
        'Intégration d\'outils No-code/Low-code (Zapier, Bubble)',
        'Création de scripts d\'automatisation personnalisés',
        'Connexion d\'outils et de systèmes',
        'Formation et accompagnement à l\'autonomie'
      ]
    },
    {
      name: 'Design UX/UI',
      description: 'Création d\'interfaces utilisateur intuitives, esthétiques et centrées sur l\'utilisateur.',
      details: [
        'Recherche Utilisateur et Personas',
        'Wireframing et Prototypage (Figma)',
        'Design System et charte graphique',
        'Tests Utilisateurs et itérations'
      ]
    }
  ];

  // Méthode appelée lors du clic sur le bouton "Plus d'infos"
  openModal(serviceName: string): void {
    const service = this.servicesData.find(s => s.name === serviceName);
    if (service) {
      this.selectedService = service;
      this.isModalOpen = true;
      // Pour empêcher le défilement de l'arrière-plan
      document.body.style.overflow = 'hidden';
    }
  }

  // Méthode pour fermer la modale
  closeModal(): void {
    this.isModalOpen = false;
    this.selectedService = null;
    // Rétablir le défilement
    document.body.style.overflow = 'auto';
  }
}
