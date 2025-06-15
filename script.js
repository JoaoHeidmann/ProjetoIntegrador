const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    } else {
      entry.target.classList.remove('active');
    }
  });
}, { threshold: 0.3 });

sections.forEach(section => observer.observe(section));

const ctxBar = document.getElementById('graficoBarras').getContext('2d');
new Chart(ctxBar, {
  type: 'bar',
  data: {
    labels: ['Turma A', 'Turma B', 'Turma C', 'Turma D'],
    datasets: [{
      label: 'Alunos Participantes',
      data: [30, 25, 40, 25],
      backgroundColor: '#007b5e',
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Participação por Turma'
      }
    }
  }
});

const ctxPie = document.getElementById('graficoPizza').getContext('2d');
new Chart(ctxPie, {
  type: 'pie',
  data: {
    labels: ['Motivados', 'Pouco Motivados', 'Desmotivados'],
    datasets: [{
      data: [65, 25, 10],
      backgroundColor: ['#28a745', '#ffc107', '#dc3545'],
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Nível de Satisfação dos Alunos'
      }
    }
  }
});
