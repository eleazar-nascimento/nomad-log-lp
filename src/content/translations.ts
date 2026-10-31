import { ComparisonRow, FaqItem, FeatureItem, PricingPlan } from '../types';

export const TRANSLATIONS = {
  pt: {
    announcement: {
      badge: 'NOVO',
      text: 'Lançamento Oficial: Baixe agora e ganhe 1 viagem ativa com todos os recursos offline grátis!',
    },
    nav: {
      howItWorks: 'Como Funciona',
      converter: 'Conversor Offline',
      mockup: 'Ver o App',
      comparison: 'Diferenciais',
      pricing: 'Planos',
      faq: 'FAQ',
      openApp: 'Abrir App',
      openAppFree: 'Começar Grátis',
      skipLink: 'Pular para o conteúdo principal',
      tagline: 'Diário & Gastos Nômades',
    },
    hero: {
      badge: 'Zero dependência de roaming móvel ou Wi-Fi',
      titleStart: 'Viaje para o ',
      titleHighlight: 'fim do mundo',
      titleEnd: ' sem perder o controle dos seus gastos e histórias.',
      subtitle:
        'O aplicativo indispensável para mochileiros, trilheiros e nômades: ',
      subtitleBold:
        'roteiro flexível dia a dia, despesas multimoedas com câmbio offline, mapa vetorial com altimetria e central de exportação em CSV.',
      ctaPrimary: 'Testar Recursos no Navegador',
      ctaSecondary: 'Entenda os 4 Pilares Offline',
      stats: [
        { value: '100%', label: 'Funcional Offline', color: 'text-white' },
        { value: '150+', label: 'Moedas Suportadas', color: 'text-brand-amber' },
        { value: '0 KB', label: 'Dados de Roaming Gastos', color: 'text-brand-emerald' },
        { value: 'CSV & JSON', label: 'Exportação Completa', color: 'text-brand-sky' },
      ],
    },
    mockup: {
      title: 'Demonstração Interativa do Aplicativo NomadLog',
      badge: 'MODO OFFLINE ATIVO',
      tripTitle: 'nomad-log://dashboard • Mochilão Sudeste Asiático (Tailândia & Vietnã)',
      tabs: {
        dashboard: '📊 Painel Principal',
        itinerary: '🧭 Roteiro & Altimetria',
        export: '📦 Central de Exportação',
      },
      dashboard: {
        budgetTitle: 'Orçamento da Viagem',
        budgetSpent: 'R$ 633,34',
        budgetRemaining: 'Restante: R$ 3.766,66',
        consumed: '14% do teto consumido',
        fxTitle: 'Conversão Offline',
        fxFrozen: 'TAXA CONGELADA',
        fxSource: '120 Baht tailandês (THB)',
        fxResult: '≈ R$ 20,35',
        fxNote: '✓ Pad Thai & Suco registrados',
        packTitle: 'Bagagem & Mochila',
        packItems: '12 de 16 itens',
        packWeight: '2.89 kg pesados',
        packProgress: '75%',
      },
      itinerary: {
        mapTitle: 'Mapa Vetorial em Cache Local',
        mapSub: '● 100% Offline • Sem Google Maps',
        routeTab: 'Rota (Trilha 2D)',
        altTab: 'Altitude (Elevação)',
        dayBalanceTitle: 'Dia 4: Parque Nacional Doi Inthanon',
        estimated: 'Previsto: THB 1.200 (≈ R$ 203,50)',
        actual: 'Gasto Real: THB 1.200 (Dentro da meta)',
        statusDone: '✓ Gasto Pago',
        stopName: 'Trilha das Cachoeiras e Santuário de Elefantes',
        stopLocation: 'Parque Nacional Doi Inthanon • 1850m alt. • 8.4 km',
        stopAction: 'Mover Dia (-30m / +30m)',
      },
      export: {
        title: 'Central de Exportação & Soberania dos Dados',
        subtitle: 'Seus dados são 100% seus. Exporte e compartilhe em 1 toque sem internet.',
        csvTitle: 'Planilha de Despesas (CSV)',
        csvSub: 'Compatível com Excel, Google Sheets e Numbers com UTF-8 BOM.',
        jsonTitle: 'Backup Completo da Viagem (JSON)',
        jsonSub: 'Snapshot estruturado de roteiro, gastos, waypoints e fotos.',
        reportTitle: 'Relatório Formatado (Markdown)',
        reportSub: 'Pronto para colar em blogs, Notion ou compartilhar no WhatsApp.',
        badgeShared: '1-Toque Nativo',
      },
    },
    converter: {
      tag: 'EXPERIMENTE AO VIVO',
      heading: 'Como você converte gastos na rua sem internet?',
      subheading:
        'O NomadLog armazena o último snapshot de câmbio no seu celular. Digite um valor abaixo para ver o cálculo instantâneo:',
      payInLabel: 'Você paga na moeda local:',
      placeholder: 'Valor pago',
      equivalentLabel: 'Equivalente em Real Brasileiro (BRL):',
      statusLabel: 'Status da Cotação:',
      statusValue: 'Congelada no Cache Offline (0ms)',
    },
    features: {
      heading: 'Desenvolvido por quem viaja para quem viaja',
      subheading:
        'Chega de alternar entre 4 aplicativos diferentes ou sofrer com telas brancas quando o sinal 4G sumir.',
      items: [
        {
          id: 'roteiro-flexivel',
          title: 'Roteiro Flexível & Linha do Tempo',
          description:
            'A van quebrou ou os planos mudaram? Mova paradas entre dias com 1 toque e faça microajustes de horário (-30m / +30m) sem atrito.',
          tag: 'Baixa Fricção',
          iconName: 'map',
          colorClass: 'sky',
        },
        {
          id: 'altimetria-vetorial',
          title: 'Mapa Vetorial 2D & Altimetria',
          description:
            'Curvas de nível e trilhas em SVG ultraleves. Acompanhe a subida, desnível acumulado e picos de altitude sem drenar a bateria com GPS pesado.',
          tag: 'Relevo & Picos',
          iconName: 'activity',
          colorClass: 'orange',
        },
        {
          id: 'previsao-vs-realidade',
          title: 'Previsão de Custo vs. Gasto Real',
          description:
            'Estipule o custo de cada parada. Com 1 toque em "+ Lançar Gasto", o formulário vem pré-preenchido e a despesa desconta da meta diária.',
          tag: 'Ponte Financeira',
          iconName: 'coins',
          colorClass: 'emerald',
        },
        {
          id: 'exportacao-livre',
          title: 'Central de Exportação (CSV, JSON, MD)',
          description:
            'Soberania total: exporte planilhas de gastos em CSV com acentuação perfeita, backup integral da viagem em JSON ou relatório para Notion.',
          tag: 'Soberania de Dados',
          iconName: 'file-spreadsheet',
          colorClass: 'purple',
        },
      ] as FeatureItem[],
    },
    comparison: {
      heading: 'Por que o NomadLog é diferente?',
      subheading:
        'Veja a comparação nua e crua entre o NomadLog e os gigantes de mercado.',
      colScenario: 'Recurso / Situação',
      colNomad: 'NomadLog 🧭',
      colWanderlog: 'Wanderlog 🗺️',
      colPolarsteps: 'Polarsteps 🌍',
      rows: [
        {
          feature: 'Funcionamento Offline Real',
          nomadLog: '100% Gratuito & Nativo em 0ms ✅',
          wanderlog: 'Cobrado no PRO ($49/ano) ❌',
          polarsteps: 'Parcial (precisa de rede) ⚠️',
          isExclusive: true,
        },
        {
          feature: 'Controle de Gastos & Câmbio',
          nomadLog: 'Multi-moeda com taxas em cache ✅',
          wanderlog: 'Básico (exige internet) ⚠️',
          polarsteps: 'Zero gestão financeira ❌',
          isExclusive: true,
        },
        {
          feature: 'Previsão vs. Realidade por Parada',
          nomadLog: 'Vinculação direta com 1 clique ✅',
          wanderlog: 'Abas separadas e sem vínculo ❌',
          polarsteps: 'Inexistente ❌',
          isExclusive: true,
        },
        {
          feature: 'Altimetria e Mapa de Relevo',
          nomadLog: 'Vetor 2D leve com curvas e picos ✅',
          wanderlog: 'Google Maps pesado ❌',
          polarsteps: 'Globo 3D sem topografia ⚠️',
          isExclusive: true,
        },
        {
          feature: 'Flexibilidade de Cronograma',
          nomadLog: 'Mover dia e +/-30m sem atrito ✅',
          wanderlog: 'Engessado no celular ⚠️',
          polarsteps: 'Não planeja roteiro futuro ❌',
          isExclusive: true,
        },
        {
          feature: 'Exportação (CSV, JSON, Markdown)',
          nomadLog: 'Totalmente livre no aparelho ✅',
          wanderlog: 'Restrito no plano pago ⚠️',
          polarsteps: 'Focado em vender livro impresso ❌',
          isExclusive: true,
        },
      ] as ComparisonRow[],
    },
    pricing: {
      heading: 'Preço Justo. Sem Assinatura Mensal.',
      subheading:
        'Não cobramos mensalidades recorrentes para uma viagem que dura algumas semanas.',
      plans: [
        {
          id: 'free',
          name: 'Mochileiro Base',
          price: 'Gratuito',
          description: 'Tudo o que você precisa para planejar e executar sua expedição.',
          ctaLabel: 'Começar Agora Grátis',
          features: [
            '1 Viagem ativa com todas as funções',
            'Roteiro flexível e linha do tempo interativa',
            'Despesas offline ilimitadas em 150+ moedas',
            'Mapa vetorial com gráficos de altimetria',
            'Checklist completo de bagagem com peso',
            'Diário de memórias com fotos do aparelho',
          ],
        },
        {
          id: 'pro',
          name: 'Mochileiro PRO (Vitalício)',
          badge: 'MELHOR VALOR',
          price: 'R$ 59,90',
          billingPeriod: 'pagamento único vitalício',
          description: 'Pague uma única vez e use em todas as viagens pelo resto da vida.',
          ctaLabel: 'Garantir Acesso Vitalício',
          highlighted: true,
          features: [
            'Viagens simultâneas ilimitadas',
            'Exportação ilimitada em CSV (Excel), JSON e Markdown',
            'Backup criptografado na nuvem via Wi-Fi',
            'Histórico estendido de taxas de câmbio',
            'Selo PRO no app e suporte prioritário',
          ],
        },
      ] as PricingPlan[],
    },
    faq: {
      heading: 'Perguntas Frequentes',
      subheading: 'Tudo sobre o funcionamento offline, câmbio e segurança do NomadLog.',
      items: [
        {
          id: 'offline',
          question: 'O app realmente funciona 100% sem internet ou chip internacional?',
          answer:
            'Sim! O NomadLog foi desenhado sob a filosofia offline-first. O banco de dados local (AsyncStorage), os mapas vetoriais matemáticos, o conversor de moedas e as fotos do celular funcionam perfeitamente em Modo Avião.',
        },
        {
          id: 'cambio-como',
          question: 'Como funciona a conversão de moedas sem conexão?',
          answer:
            'Sempre que seu celular se conecta ao Wi-Fi do hotel, aeroporto ou café, o NomadLog atualiza um snapshot de mais de 150 moedas globais. Quando você sai para a rua, o app usa essas taxas congeladas para converter gastos em 0ms.',
        },
        {
          id: 'wanderlog-polarsteps',
          question: 'Qual a diferença do NomadLog para o Wanderlog e Polarsteps?',
          answer:
            'O Wanderlog cobra ~$50/ano para liberar o modo offline e depende do Google Maps. O Polarsteps grava fotos, mas não tem orçamento nem roteiro. O NomadLog une roteiro flexível com altimetria, teto de gastos diário com câmbio offline e exportação livre.',
        },
        {
          id: 'exportacao',
          question: 'Como funciona a exportação de dados?',
          answer:
            'Você pode exportar a lista de despesas em formato CSV com UTF-8 BOM (abrindo perfeitamente no Excel/Google Sheets), o backup completo da viagem em JSON estruturado ou o relatório da viagem em Markdown formatado para colar no Notion ou enviar no WhatsApp.',
        },
      ] as FaqItem[],
    },
    footer: {
      rights: 'Todos os direitos reservados.',
      madeFor: 'Feito para exploradores e viajantes independentes pelo mundo.',
    },
  },
  en: {
    announcement: {
      badge: 'NEW',
      text: 'Official Launch: Download now and get 1 active trip with all offline features free!',
    },
    nav: {
      howItWorks: 'How It Works',
      converter: 'Offline FX',
      mockup: 'App Preview',
      comparison: 'Comparison',
      pricing: 'Pricing',
      faq: 'FAQ',
      openApp: 'Launch App',
      openAppFree: 'Start Free',
      skipLink: 'Skip to main content',
      tagline: 'Nomad Field Log & Expenses',
    },
    hero: {
      badge: 'Zero mobile roaming or Wi-Fi dependency',
      titleStart: 'Travel to the ',
      titleHighlight: 'edge of the world',
      titleEnd: ' without losing track of your money and adventures.',
      subtitle:
        'The essential app for backpackers, hikers, and digital nomads: ',
      subtitleBold:
        'flexible daily itinerary, multi-currency offline expenses, vector maps with elevation profiles, and instant CSV export.',
      ctaPrimary: 'Try Interactive Features',
      ctaSecondary: 'Explore the 4 Offline Pillars',
      stats: [
        { value: '100%', label: 'Offline Functional', color: 'text-white' },
        { value: '150+', label: 'Currencies Supported', color: 'text-brand-amber' },
        { value: '0 KB', label: 'Roaming Data Burned', color: 'text-brand-emerald' },
        { value: 'CSV & JSON', label: 'Full Data Export', color: 'text-brand-sky' },
      ],
    },
    mockup: {
      title: 'Interactive NomadLog App Demonstration',
      badge: 'OFFLINE MODE ACTIVE',
      tripTitle: 'nomad-log://dashboard • Southeast Asia Backpacking (Thailand & Vietnam)',
      tabs: {
        dashboard: '📊 Main Dashboard',
        itinerary: '🧭 Itinerary & Elevation',
        export: '📦 Export Center',
      },
      dashboard: {
        budgetTitle: 'Trip Budget',
        budgetSpent: '$120.50',
        budgetRemaining: 'Remaining: $879.50',
        consumed: '14% of budget spent',
        fxTitle: 'Offline Conversion',
        fxFrozen: 'FROZEN RATE',
        fxSource: '120 Thai Baht (THB)',
        fxResult: '≈ $3.48 USD',
        fxNote: '✓ Pad Thai & Fresh Juice logged',
        packTitle: 'Backpack & Gear',
        packItems: '12 of 16 packed',
        packWeight: '2.89 kg weighed',
        packProgress: '75%',
      },
      itinerary: {
        mapTitle: 'Locally Cached Vector Map',
        mapSub: '● 100% Offline • No Google Maps needed',
        routeTab: 'Trail (2D Route)',
        altTab: 'Elevation Profile',
        dayBalanceTitle: 'Day 4: Doi Inthanon National Park',
        estimated: 'Estimated: THB 1,200 (≈ $34.80)',
        actual: 'Actual Spent: THB 1,200 (On target)',
        statusDone: '✓ Expense Paid',
        stopName: 'Waterfall Trek & Karen Sanctuary',
        stopLocation: 'Doi Inthanon National Park • 1850m peak • 8.4 km',
        stopAction: 'Move Day (-30m / +30m)',
      },
      export: {
        title: 'Export Center & Data Sovereignty',
        subtitle: 'Your travel data belongs to you. Export and share with 1 tap, completely offline.',
        csvTitle: 'Expenses Spreadsheet (CSV)',
        csvSub: 'Excel and Google Sheets ready with clean UTF-8 BOM encoding.',
        jsonTitle: 'Complete Trip Backup (JSON)',
        jsonSub: 'Structured snapshot of itinerary, waypoints, photos and logs.',
        reportTitle: 'Formatted Trip Report (Markdown)',
        reportSub: 'Ready to paste into Notion, travel blogs or share via WhatsApp.',
        badgeShared: '1-Tap Native Share',
      },
    },
    converter: {
      tag: 'LIVE DEMO',
      heading: 'How do you convert prices on the street without cell signal?',
      subheading:
        'NomadLog stores a frozen FX snapshot right on your device. Type an amount below to test instant offline conversion:',
      payInLabel: 'Local payment currency:',
      placeholder: 'Amount paid',
      equivalentLabel: 'Equivalent in Brazilian Real (BRL) or Base Currency:',
      statusLabel: 'Exchange Rate Status:',
      statusValue: 'Frozen in Local Cache (0ms)',
    },
    features: {
      heading: 'Built by travelers, for travelers',
      subheading:
        'No more juggling 4 different apps or staring at blank screens when cell service vanishes.',
      items: [
        {
          id: 'roteiro-flexivel',
          title: 'Flexible Timeline & Itinerary',
          description:
            'Did the van break down or plans shift? Move stops between days with one tap and adjust times with quick -30m / +30m buttons with zero friction.',
          tag: 'Low Friction',
          iconName: 'map',
          colorClass: 'sky',
        },
        {
          id: 'altimetria-vetorial',
          title: '2D Vector Maps & Elevation Chart',
          description:
            'Ultralight SVG Bézier trails. Track elevation gain, mountain peaks, and altitude without draining your battery with heavy satellite GPS.',
          tag: 'Peaks & Relief',
          iconName: 'activity',
          colorClass: 'orange',
        },
        {
          id: 'previsao-vs-realidade',
          title: 'Estimated Cost vs. Actual Spend',
          description:
            'Set estimated costs for stops. One tap on "+ Log Expense" pre-fills the form and deducts from your daily budget in local currency.',
          tag: 'Financial Bridge',
          iconName: 'coins',
          colorClass: 'emerald',
        },
        {
          id: 'exportacao-livre',
          title: 'Full Export Center (CSV, JSON, MD)',
          description:
            'Complete data freedom: export expenses in Excel CSV, full trip backups in structured JSON, or formatted Markdown reports for Notion.',
          tag: 'Data Sovereignty',
          iconName: 'file-spreadsheet',
          colorClass: 'purple',
        },
      ] as FeatureItem[],
    },
    comparison: {
      heading: 'Why is NomadLog fundamentally different?',
      subheading:
        'An honest, side-by-side comparison between NomadLog and market leaders.',
      colScenario: 'Feature / Use Case',
      colNomad: 'NomadLog 🧭',
      colWanderlog: 'Wanderlog 🗺️',
      colPolarsteps: 'Polarsteps 🌍',
      rows: [
        {
          feature: 'True Offline Functionality',
          nomadLog: '100% Free & Native in 0ms ✅',
          wanderlog: 'Locked behind $49/yr PRO ❌',
          polarsteps: 'Partial (needs network) ⚠️',
          isExclusive: true,
        },
        {
          feature: 'Expense & Multi-Currency Engine',
          nomadLog: 'Multi-currency with cached rates ✅',
          wanderlog: 'Basic (needs internet) ⚠️',
          polarsteps: 'Zero financial tracking ❌',
          isExclusive: true,
        },
        {
          feature: 'Estimated vs. Actual per Stop',
          nomadLog: 'Direct 1-click bridge ✅',
          wanderlog: 'Disconnected tabs ❌',
          polarsteps: 'Non-existent ❌',
          isExclusive: true,
        },
        {
          feature: 'Elevation & Topographic Profiles',
          nomadLog: 'Lightweight 2D vector with peaks ✅',
          wanderlog: 'Heavy Google Maps ❌',
          polarsteps: '3D globe without altitude ⚠️',
          isExclusive: true,
        },
        {
          feature: 'Flexible On-the-Go Timeline',
          nomadLog: 'Move days & +/-30m chips ✅',
          wanderlog: 'Clunky on mobile ⚠️',
          polarsteps: 'Cannot plan future stops ❌',
          isExclusive: true,
        },
        {
          feature: 'Open Data Export (CSV, JSON, MD)',
          nomadLog: 'Completely free on device ✅',
          wanderlog: 'Restricted to paid plan ⚠️',
          polarsteps: 'Focused on selling hardcovers ❌',
          isExclusive: true,
        },
      ] as ComparisonRow[],
    },
    pricing: {
      heading: 'Fair Pricing. No Monthly Subscriptions.',
      subheading:
        'We do not charge recurring subscriptions for trips that only last a few weeks.',
      plans: [
        {
          id: 'free',
          name: 'Base Backpacker',
          price: 'Free',
          description: 'Everything you need to plan and execute your expedition.',
          ctaLabel: 'Get Started Free',
          features: [
            '1 Active trip with all core features',
            'Flexible itinerary with interactive timeline',
            'Unlimited offline expenses in 150+ currencies',
            'Vector route map with elevation profile',
            'Gear packing checklist with weight calculation',
            'Photo journal with local camera/gallery photos',
          ],
        },
        {
          id: 'pro',
          name: 'PRO Backpacker (Lifetime)',
          badge: 'BEST VALUE',
          price: '$12.99',
          billingPeriod: 'one-time lifetime payment',
          description: 'Pay once and use across all future expeditions forever.',
          ctaLabel: 'Claim Lifetime Access',
          highlighted: true,
          features: [
            'Unlimited simultaneous trips',
            'Full data export to CSV (Excel), JSON and Markdown',
            'Encrypted cloud backup when on Wi-Fi',
            'Extended historical currency exchange rates',
            'Lifetime PRO badge & priority support',
          ],
        },
      ] as PricingPlan[],
    },
    faq: {
      heading: 'Frequently Asked Questions',
      subheading: 'Everything you need to know about offline reliability, FX, and data safety.',
      items: [
        {
          id: 'offline',
          question: 'Does the app really work 100% without cellular signal or roaming?',
          answer:
            'Yes! NomadLog was built from day one with an offline-first architecture. The local database (AsyncStorage), mathematical vector maps, currency converter, and camera photos run smoothly in Airplane Mode.',
        },
        {
          id: 'cambio-como',
          question: 'How does currency conversion work without internet?',
          answer:
            'Whenever your device connects to Wi-Fi at a hostel or airport, NomadLog caches official exchange rates for over 150 currencies. While out on the trail or street markets, it uses these frozen rates to calculate expenses in 0ms.',
        },
        {
          id: 'wanderlog-polarsteps',
          question: 'How is NomadLog different from Wanderlog and Polarsteps?',
          answer:
            'Wanderlog locks offline access behind a ~$50/year subscription and depends on Google Maps. Polarsteps tracks past photos but lacks budgets or forward planning. NomadLog merges flexible itineraries, elevation charts, offline currency tracking, and open data export.',
        },
        {
          id: 'exportacao',
          question: 'How does data export work?',
          answer:
            'You can export expenses as a UTF-8 BOM CSV (opening cleanly in Excel/Google Sheets), backup the entire trip structure in JSON, or generate a formatted Markdown summary ready for Notion, travel blogs, or WhatsApp.',
        },
      ] as FaqItem[],
    },
    footer: {
      rights: 'All rights reserved.',
      madeFor: 'Built for independent explorers and digital nomads worldwide.',
    },
  },
};
