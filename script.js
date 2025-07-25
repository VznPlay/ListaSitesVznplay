        // Atualizar o ano automaticamente no rodapé
        document.getElementById("year").textContent = new Date().getFullYear();




        // Adicionar evento de clique para mobile
        // Comportamento do help-icon (? botão)
document.querySelectorAll('.help-icon').forEach(icon => {
    icon.addEventListener('click', function (e) {
        e.stopPropagation();

        if (window.innerWidth <= 1000) {
            // Em telas pequenas, o ? abre direto o pop-up
            openPopup();
        } else {
            // Em telas grandes, mostra a bolha (tooltip)
            const tooltip = this.parentElement.querySelector('.tooltip');
            if (tooltip) tooltip.classList.add('show');
        }
    });
});


// Aplica o efeito de tooltip para todos os help-icon
document.querySelectorAll('.help-container').forEach(container => {
  const helpIcon = container.querySelector('.help-icon');
  const tooltip = container.querySelector('.tooltip');
  let tooltipTimeout;

  if (helpIcon && tooltip) {
    helpIcon.addEventListener('mouseenter', () => {
      clearTimeout(tooltipTimeout);
      tooltip.classList.add('show');
    });

    helpIcon.addEventListener('mouseleave', () => {
      tooltipTimeout = setTimeout(() => {
        tooltip.classList.remove('show');
      }, 300);
    });

    tooltip.addEventListener('mouseenter', () => {
      clearTimeout(tooltipTimeout);
    });

    tooltip.addEventListener('mouseleave', () => {
      tooltipTimeout = setTimeout(() => {
        tooltip.classList.remove('show');
      }, 300);
    });
  }
});




// Conteúdo dos popups com links do Rumble
const popupConteudo = {
  facilitador: {
    video: 'https://www.dailymotion.com/embed/video/x9n8hz6'
  },
    anuidade: {
    video: 'https://www.dailymotion.com/embed/video/x9neo8w'
  },
    macs: {
    video: 'https://www.dailymotion.com/embed/video/x9n8hzc'
  },
    planilhas: {
    video: 'https://www.dailymotion.com/embed/video/x9n8hz4'
  },
    simulador: {
    video: 'https://www.dailymotion.com/embed/video/x9n8hz2'
  },
    sorteador: {
    video: 'https://www.dailymotion.com/embed/video/x9n8hza'
  },
    indicacao: {
    video: 'https://www.dailymotion.com/embed/video/x9n8ida'
  },
    funil: {
    video: 'https://www.dailymotion.com/embed/video/x9n8hz8'
  }

  // Adicione mais vídeos aqui se precisar
};
// Abre o pop-up com vídeo do Rumble
function openPopupById(id) {
  const popup = popupConteudo[id];
  if (!popup) return;

  const iframe = document.getElementById("popupIframe");

  document.getElementById("popupOverlay").style.display = "flex";
  document.body.style.overflow = "hidden";

  iframe.src = popup.video;
}
// Fecha o pop-up e limpa o iframe
function closePopup() {
  const popup = document.getElementById("popupOverlay");
  const iframe = document.getElementById("popupIframe");

  if (iframe) {
    iframe.src = ""; // Limpa para parar o vídeo
  }

  popup.style.display = "none";
  document.body.style.overflow = "auto";
}
// Ativa botões que abrem o pop-up
document.querySelectorAll('.como-usar-btn, .help-icon').forEach(el => {
  el.addEventListener('click', function (e) {
    const id = this.getAttribute('data-id');
    if (window.innerWidth <= 1000 || this.classList.contains('como-usar-btn')) {
      openPopupById(id);
    } else {
      const tooltip = this.parentElement.querySelector('.tooltip');
      if (tooltip) tooltip.classList.add('show');
    }
  });
});


