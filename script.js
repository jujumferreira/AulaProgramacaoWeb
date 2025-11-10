/* =================================================================
   1. FUNÇÃO DO MENU MOBILE (Precisa ficar "global")
   ================================================================= */
// Esta função é chamada pelo 'onclick' no seu index.html
function toggleMenu() {
    const nav = document.querySelector('nav');
    if (nav) {
        nav.classList.toggle('active'); // Lembre-se de criar o CSS para .nav.active
    }
}

/* =================================================================
   2. LÓGICA DA SPA (SÓ RODA DEPOIS QUE O HTML CARREGAR)
   ================================================================= */
document.addEventListener('DOMContentLoaded', () => {
    
    // O Roteador só começa DEPOIS que o HTML está pronto
    
    /* -------------------
       ELEMENTO RAIZ
      ------------------- */
    const appRoot = document.getElementById('app-root');
    
    // Se o appRoot não for encontrado, nada mais funciona
    if (!appRoot) {
        console.error("Erro Crítico: Elemento #app-root não foi encontrado no seu HTML.");
        return; 
    }

    /* -------------------
       TEMPLATES
      ------------------- */

    // ---- Template da HOME ----
    const templateHome = () => {
        return `
            <section class="container my-5 who-we-are-section">
                <h2 class="text-center mb-5 section-title-home">Quem somos</h2>
                <div class="row align-items-center">
                    <div class="col-lg-8 col-md-12 mb-4 text-content-center">
                        <p class="lead">
                            A <strong>Kidscipulos</strong> é uma plataforma dedicada a ensinar crianças sobre os princípios cristãos de maneira divertida e interativa.
                        </p>
                        <div class="mt-4 text-center text-md-start">
                            <a href="#/projetos" class="btn btn-primary-home btn-lg">
                                Conheça Nossos Projetos &rarr;
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-12 text-center">
                        <img src="imagens/logo kidscipulos (1).png" alt="Logo da Organização Kidscipulos" class="img-fluid logo-featured">
                    </div>
                </div>
            </section>

            <section class="container my-5"> 
                <h2 class="text-center mb-4">Missão, Visão e Valores</h2>
                <div class="row row-cols-1 row-cols-md-3 g-4 text-center">
                    <div class="col">
                        <div class="p-4 border rounded-3 h-100 shadow-sm card-hover">
                            <h3><span class="text-primary">✨</span> Missão</h3>
                            <p class="mt-3">Promovemos o ensino dos valores cristãos de forma acessível e envolvente para crianças.</p>
                        </div>
                    </div>
                    <div class="col">
                        <div class="p-4 border rounded-3 h-100 shadow-sm card-hover">
                            <h3><span class="text-primary">❤️</span> Visão / Inclusão</h3>
                            <p class="mt-3">Acreditamos que todas as crianças merecem acesso a uma educação de qualidade.</p>
                        </div>
                    </div>
                    <div class="col">
                        <div class="p-4 border rounded-3 h-100 shadow-sm card-hover">
                            <h3><span class="text-primary">🤝</span> Valores / Comunidade</h3>
                            <p class="mt-3">Valorizamos a construção de uma comunidade forte e solidária.</p>
                        </div>
                    </div>
                </div>
            </section>
        `;
    };

    // ---- Template de PROJETOS ----
    const templateProjetos = () => {
        return `
            <section class="hero text-center">
                <div class="hero-content">
                    <h1>Venha ser um Voluntário Kidscipulos</h1>
                    <p>Junte-se a nós e faça a diferença na vida de muitas crianças.</p>
                </div>
            </section>

            <section class="container my-5">
                <h2 class="text-center mb-4">Galeria de Projetos</h2>
                <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="imagens/voluntário 1.jpg" class="d-block w-100" alt="Primeiro Slide">
                        </div>
                        <div class="carousel-item">
                            <img src="imagens/voluntário 2.jpg" class="d-block w-100" alt="Segundo Slide">
                        </div>
                        <div class="carousel-item">
                            <img src="imagens/voluntário 3.jpg" class="d-block w-100" alt="Terceiro Slide">
                        </div>
                        <div class="carousel-item">
                            <img src="imagens/voluntário 4.jpg" class="d-block w-100" alt="Terceiro Slide">
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Anterior</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Próximo</span>
                    </button>
                </div>
            </section>

            <section class="container my-5 content-section"> 
                <div class="row justify-content-center text-center mb-5">
                    <div class="col-lg-8">
                        <h2 class="display-5 fw-bold section-title">Como Funciona</h2>
                        <p class="lead">Nossos projetos conectam pessoas dispostas a ajudar com comunidades que precisam de apoio.</p>
                    </div>
                </div>
                <div class="row row-cols-1 row-cols-sm-3 g-4 text-center">
                    <div class="col">
                        <div class="p-4 border rounded-3 h-100 shadow-sm card-hover">
                            <h3 class="mb-3"><span style="font-size: 2.2rem; color: #f35c04;">✨</span> Aprendizado</h3>
                            <p class="text-muted mt-3">Promovemos o aprendizado com amor, oferecendo apoio escolar e valores cristãos.</p>
                        </div>
                    </div>
                    <div class="col">
                        <div class="p-4 border rounded-3 h-100 shadow-sm card-hover">
                            <h3 class="mb-3"><span style="font-size: 2.2rem; color: #f35c04;">💗</span> Cuidado</h3>
                            <p class="text-muted mt-3">Cuidamos do bem-estar físico e emocional das crianças, com ações de higiene e alimentação.</p>
                        </div>
                    </div>
                    <div class="col">
                        <div class="p-4 border rounded-3 h-100 shadow-sm card-hover">
                            <h3 class="mb-3"><span style="font-size: 2.2rem; color: #f35c04;">🌱</span> Convivência</h3>
                            <p class="text-muted mt-3">Realizamos momentos de arte, música e brincadeiras que fortalecem a autoestima.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="cta-style py-5 text-center">
                <div class="cta-content-style">
                    <h2 class="display-6 fw-bold mb-3">Participe dos Nossos Projetos</h2>
                    <p class="lead mb-4">Venha fazer parte do Kidscipulos.</p>
                    <div class="cta-buttons">
                        <a href="#/cadastro" class="btn btn-primary btn-lg me-3">Cadastre-se</a>
                        <a href="#/" class="btn btn-secondary btn-lg">Voltar ao Início</a>
                    </div>
                </div>
            </section>
        `;
    };

    // ---- Template de CADASTRO ----
    const templateCadastro = () => {
        return `
            <section class="hero hero-cadastro">
                <div class="hero-content">
                    <h1>Venha ser um Voluntário Kidscipulos</h1>
                    <p>Junte-se a nós e faça a diferença na vida de muitas crianças.</p>
                </div>
            </section>

            <section class="signup-section container my-5">
                <h2 class="text-center">Cadastro de Voluntário Kidscipulos</h2>
                
                <div id="formMessage" class="mt-4"></div>
                
                <form id="volunteerForm" class="p-4 border rounded-3 shadow-sm bg-light" novalidate>
                    <fieldset>
                        <legend>Dados Pessoais</legend>
                        <div class="form-group mb-3">
                            <label for="nome" class="form-label">Nome Completo *</label>
                            <input type="text" id="nome" name="nome" class="form-control">
                        </div>
                        <div class="form-group mb-3">
                            <label for="email" class="form-label">E-mail *</label>
                            <input type="email" id="email" name="email" class="form-control">
                        </div>
                        <div class="form-group mb-3">
                            <label for="telefone" class="form-label">Telefone *</label>
                            <input type="tel" id="telefone" name="telefone" class="form-control" placeholder="(11) 99999-9999">
                        </div>
                        <div class="form-group mb-3">
                            <label for="idade" class="form-label">Idade *</label>
                            <input type="number" id="idade" name="idade" class="form-control" min="16" max="100">
                        </div>
                    </fieldset>

                    <fieldset>
                        <legend>Disponibilidade</legend>
                        <div class="form-group mb-3">
                            <label for="disponibilidade" class="form-label">Quando você pode ajudar? *</label>
                            <select id="disponibilidade" name="disponibilidade" class="form-select">
                                <option value="">Selecione...</option>
                                <option value="quinzenal">De 15 em 15 dias</option>
                                <option value="domingos">Todos os Domingos</option>
                            </select>
                        </div>
                        <div class="form-group mb-3">
                            <label for="sala-para-servir" class="form-label">Sala de preferência *</label>
                            <select id="sala-para-servir" name="sala-para-servir" class="form-select">
                                <option value="">Selecione...</option>
                                <option value="Sala-verde">Sala Verde - 0 a 1 ano </option>
                                <option value="Sala-lilas"> Sala lilás - 2 a 3 anos</option>
                                <option value="Sala-Vermelha">Sala Vermelha - 3 a 4 anos</option>
                                <option value="Sala-Amarela">Sala Amarela - 5 a 6 anos</option>
                                <option value="Sala-Azul">Sala Azul - 7 a 8 anos</option>
                                <option value="Sala-Cinza">Interkids - 9 a 10 anos</option>
                            </select>
                        </div>
                        <div class="form-group mb-3">
                            <label for="area-interesse" class="form-label">Área de Interesse *</label>
                            <select id="area-interesse" name="area-interesse" class="form-select">
                                <option value="">Selecione...</option>
                                <option value="Coordenação">Coordenação</option>
                                <option value="Projetos e eventos">Projetos e eventos</option>
                                <option value="Apoio Geral">Apoio Geral</option>
                                <option value="Apoio Administrativo">Apoio Administrativo</option>
                                <option value="Servir na Sala">Apenas servir na Sala escolhida</option>
                            </select>
                        </div>
                    </fieldset>

                    <fieldset>
                        <legend>Informações Adicionais</legend>
                        <div class="form-group mb-3">
                            <label for="experiencia" class="form-label">Você já participou de ações voluntárias no kids antes?</label>
                            <textarea id="experiencia" name="experiencia" class="form-control" placeholder="Conte-nos sobre sua experiência..."></textarea>
                        </div>
                        <div class="form-group mb-3">
                            <label for="motivacao" class="form-label">Por que você quer ser voluntário no Kidscipulos?</label>
                            <textarea id="motivacao" name="motivacao" class="form-control" placeholder="Compartilhe sua motivação..."></textarea>
                        </div>
                    </fieldset>

                    <button type="submit" class="btn btn-primary btn-lg w-100">Enviar Cadastro</button>
                </form>
            </section>
        `;
    };

    // ---- Template da LISTA ----
    const templateLista = () => {
        return `
            <div class="container my-5">
                <h2 class="text-center mb-4">Voluntários Cadastrados</h2>
                <p class="text-center text-muted">Estes dados estão salvos no Local Storage do seu navegador.</p>
                <div id="tabelaVoluntarios" class="table-responsive bg-light p-3 rounded shadow-sm">
                    </div>
            </div>
        `;
    };


    /* -------------------
        O ROTEADOR
      ------------------- */

    const routes = {
        '#/': templateHome,
        '#/projetos': templateProjetos,
        '#/cadastro': templateCadastro,
        '#/lista': templateLista,
    };

    const loadPage = () => {
        const path = window.location.hash || '#/';
        const templateFunction = routes[path] || routes['#/'];
        
        appRoot.innerHTML = templateFunction();
        window.scrollTo(0, 0);
        
        if (path === '#/cadastro') {
            setupFormValidation(); 
            setupPhoneMask(); 
        } 
        else if (path === '#/lista') {
            exibirVoluntarios(); 
        }
    };

    /* -------------------
        LÓGICA DO FORMULÁRIO
      ------------------- */

    function setupFormValidation() {
        const form = document.getElementById('volunteerForm');
        if (form) {
            form.addEventListener('submit', handleSubmit); 
        }
    }

    function setupPhoneMask() {
        const telefoneInput = document.getElementById('telefone');
        if (telefoneInput) {
            telefoneInput.addEventListener('input', (e) => {
                let value = e.target.value.replace(/\D/g, ''); 
                if (value.length > 11) value = value.slice(0, 11); 
                if (value.length > 10) {
                    value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
                } else if (value.length > 6) {
                    value = `(${value.slice(0, 2)}) ${value.slice(2, 6)}-${value.slice(6)}`;
                } else if (value.length > 2) {
                    value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
                } else if (value.length > 0) {
                    value = `(${value}`;
                }
                e.target.value = value;
            });
        }
    }
       
    // #############################################################
    // ### INÍCIO DA ALTERAÇÃO (JANELA POPUP) ###
    // #############################################################
    function handleSubmit(event) {
        event.preventDefault(); 
        const form = event.target;
        const messageDiv = document.getElementById('formMessage'); // Usado apenas para 'clearMessages'

        clearMessages(form, messageDiv); // Limpa erros antigos
        
        let isValid = true; 

        const nome = form.nome;
        const email = form.email;
        const telefone = form.telefone;
        const idade = form.idade;
        const disponibilidade = form.disponibilidade;
        const sala = form['sala-para-servir'];
        const area = form['area-interesse'];

        if (nome.value.trim() === '') {
            isValid = false;
            showError(nome,'O campo Nome é obrigatório.');
        }
        if (email.value.trim() === '') {
            isValid = false;
            showError(email, 'O campo Email é obrigatório.');
        } else if (!validateEmail(email.value)) {
            isValid = false;
            showError(email, 'Por favor, insira um email válido.');
        }
        if (telefone.value.trim() === '') {
            isValid = false;
            showError(telefone, 'O campo Telefone é obrigatório.');
        } else if (telefone.value.length < 14) { 
            isValid = false;
            showError(telefone, 'Telefone incompleto.');
        }
        if (idade.value.trim() === '' || parseInt(idade.value) < 16) {
            isValid = false;
            showError(idade, 'A idade é obrigatória (mínimo 16 anos).');
        }
        if (disponibilidade.value === '') {
            isValid = false;
            showError(disponibilidade, 'Selecione uma disponibilidade.');
        }
        if (sala.value === '') {
            isValid = false;
            showError(sala, 'Selecione uma sala de preferência.');
        }
        if (area.value === '') {
            isValid = false;
            showError(area, 'Selecione uma área de interesse.');
        }

        if (!isValid) {
            return; // Para a execução se for inválido
        }

        // Se chegou aqui, o formulário é VÁLIDO.
        // Salva os dados:
        const formData = {
            nome: nome.value.trim(),
            email: email.value.trim(),
            telefone: telefone.value.trim(),
            idade: idade.value.trim(),
            disponibilidade: disponibilidade.options[disponibilidade.selectedIndex].text,
            sala: sala.options[sala.selectedIndex].text,
            area: area.options[area.selectedIndex].text,
            experiencia: form.experiencia.value.trim() || 'Não preenchido',
            motivacao: form.motivacao.value.trim() || 'Não preenchido',
            dataCadastro: new Date().toLocaleString('pt-BR')
        };

        let voluntarios = JSON.parse(localStorage.getItem('voluntarios')) || [];
        voluntarios.push(formData);
        localStorage.setItem('voluntarios', JSON.stringify(voluntarios));

        // #############################################################
        // ### ESTA É A ALTERAÇÃO QUE VOCÊ PEDIU ###
        // #############################################################
        
        // 1. Mostra o popup
        alert('Cadastro realizado com sucesso!');
        
        // 2. Limpa o formulário
        form.reset(); 

        // 3. Redireciona para a lista (só depois que o usuário clicar em "OK")
        window.location.hash = '#/lista';
    }
    // #############################################################
    // ### FIM DA ALTERAÇÃO ###
    // #############################################################

    /* -------------------
        FUNÇÕES AUXILIARES
      ------------------- */

    function clearMessages(form, messageDiv) {
        // messageDiv não é mais usado para sucesso, mas ainda pode ser usado para erros futuros
        if (messageDiv) {
            messageDiv.innerHTML = '';
            messageDiv.className = '';
        }
        form.querySelectorAll('.error-message').forEach(el => el.remove());
        form.querySelectorAll('.input-error').forEach(el => el.classList.remove('input-error'));
    }

    function showError(inputElement, message) {
        inputElement.classList.add('input-error');
        const errorElement = document.createElement('small');
        errorElement.className = 'error-message'; 
        errorElement.textContent = message;
        inputElement.parentElement.appendChild(errorElement);
    }

    // Esta função não é mais usada, mas pode ficar para o futuro
    function showSuccess(messageDiv, message) {
        messageDiv.className = 'success-message'; 
        messageDiv.textContent = message;
        messageDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(String(email).toLowerCase());
    }

    /* -------------------
        LÓGICA DA LISTA
      ------------------- */

    function exibirVoluntarios() {
        const voluntarios = JSON.parse(localStorage.getItem('voluntarios') || '[]');
        const tabelaContainer = document.getElementById('tabelaVoluntarios');

        if (!tabelaContainer) return; 

        if (voluntarios.length === 0) {
            tabelaContainer.innerHTML = '<p class="text-center">Nenhum voluntário cadastrado ainda.</p>';
            return;
        }

        let html = '<table class="table table-striped table-bordered table-hover">';
        html += '<thead class="table-dark"><tr><th>Nome</th><th>Email</th><th>Telefone</th><th>Idade</th><th>Disponibilidade</th><th>Sala</th><th>Área</th><th>Data</th></tr></thead>';
        html += '<tbody>';

        voluntarios.forEach(v => {
            html += `<tr>
                <td>${v.nome}</td>
                <td>${v.email}</td>
                <td>${v.telefone}</td>
                <td>${v.idade || ''}</td>
                <td>${v.disponibilidade || ''}</td>
                <td>${v.sala || ''}</td>
      S         <td>${v.area || ''}</td>
                <td>${v.dataCadastro}</td>
            </tr>`;
        });

        html += '</tbody></table>';
        tabelaContainer.innerHTML = html;
    }

    /* -------------------
        INICIALIZAÇÃO
      ------------------- */
    
    // Ouve as mudanças na URL (quando clica num link #/)
    window.addEventListener('hashchange', loadPage);
    
    // Carrega a página inicial (ou a página do hash, se houver)
    // assim que o script é lido pela primeira vez
    loadPage();

}); // Fim do 'DOMContentLoaded'