import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger
} from '@/components/ui/alert-dialog'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { SmileIcon } from 'lucide-react'

export default function PolicyPrivacy() {
	return (
		<div className=" bg-zinc-950 h-auto w-screen">
			<div className="mx-auto w-[700px] py-20">
				<h1 className="text-5xl w-[450px] text-white font-semibold">
					Termos de política e privacidade da nossa plataforma
				</h1>

				<p className="pt-10 text-xl text-zinc-400">
					Bem-vindo à nossa plataforma de venda de cursos online. Estes Termos
					de Uso regulamentam o acesso e uso de nossos serviços e recursos,
					aplicando-se a todos os usuários, incluindo visitantes, alunos,
					instrutores e parceiros. Ao acessar e utilizar nossa plataforma, você
					concorda com estes Termos de Uso. Recomendamos a leitura atenta deste
					documento.
				</p>

				<h2 className="pt-10 font-bold text-lg">1. Aceitação dos Termos</h2>
				<p className="text-zinc-400">
					Ao utilizar nossa plataforma, você concorda com os presentes Termos de
					Uso e com nossa Política de Privacidade, que rege o uso de dados
					pessoais. Caso não concorde com qualquer condição estabelecida,
					pedimos que não utilize nossa plataforma.
				</p>

				<h2 className="pt-10 font-bold text-lg">2. Serviços da Plataforma</h2>
				<p className="text-zinc-400">
					A plataforma oferece acesso a cursos e materiais educacionais online.
					Usuários podem adquirir cursos, assistir a aulas, realizar avaliações
					e acessar conteúdos adicionais de acordo com as condições de compra e
					acesso do curso.
				</p>

				<h2 className="pt-10 font-bold text-lg">
					3. Cadastro e Conta de Usuário
				</h2>
				<p className="text-zinc-400">
					Para utilizar alguns recursos da plataforma, o usuário precisa criar
					uma conta, fornecendo informações verdadeiras e atualizadas. É de
					responsabilidade do usuário manter a confidencialidade de sua senha e
					informar imediatamente qualquer uso não autorizado de sua conta.
				</p>

				<h2 className="pt-10 font-bold text-lg">4. Política de Pagamentos</h2>
				<p className="text-zinc-400">
					Os pagamentos realizados na plataforma são processados por meio de
					serviços de terceiros. A plataforma reserva-se o direito de modificar
					os preços dos cursos, mas tais alterações não afetarão as compras já
					concluídas.
				</p>

				<h2 className="pt-10 font-bold text-lg">4.1 Reembolsos</h2>
				<p className="text-zinc-400">
					Os reembolsos seguem uma política específica, sendo concedidos
					conforme o estipulado em nossa Política de Reembolso, que é
					disponibilizada separadamente.
				</p>

				<h2 className="pt-10 font-bold text-lg">
					5. Direitos e Responsabilidades dos Instrutores
				</h2>
				<p className="text-zinc-400">
					Os instrutores são responsáveis pelo conteúdo de seus cursos, devendo
					garantir que o material seja de autoria própria ou tenha as devidas
					permissões. Eles são proibidos de compartilhar conteúdos que sejam
					ilegais, ofensivos ou que infrinjam direitos de terceiros.
				</p>

				<h2 className="pt-10 font-bold text-lg">6. Uso da Plataforma</h2>
				<p className="text-zinc-400">O usuário compromete-se a:</p>
				<ul>
					<li>
						Utilizar a plataforma apenas para fins educacionais, conforme
						permitido nos Termos de Uso.
					</li>
					<li>
						Não distribuir ou compartilhar materiais dos cursos com terceiros,
						exceto conforme permitido.
					</li>
					<li>
						Não praticar atividades fraudulentas ou que possam comprometer a
						segurança ou integridade da plataforma.
					</li>
				</ul>

				<h2 className="pt-10 font-bold text-lg">7. Propriedade Intelectual</h2>
				<p className="text-zinc-400">
					Todo o conteúdo da plataforma, incluindo textos, vídeos, gráficos e
					logotipos, é protegido por direitos autorais e pertence à nossa
					plataforma ou aos respectivos instrutores. É proibido copiar,
					reproduzir, modificar ou distribuir qualquer conteúdo sem permissão.
				</p>

				<h2 className="pt-10 font-bold text-lg">
					8. Limitação de Responsabilidade
				</h2>
				<p className="text-zinc-400">
					A plataforma não se responsabiliza por eventuais perdas ou danos
					indiretos que possam resultar do uso dos serviços. O conteúdo dos
					cursos é fornecido pelos instrutores, e a plataforma não garante a
					exatidão ou completude das informações oferecidas.
				</p>

				<h2 className="pt-10 font-bold text-lg">9. Modificações nos Termos</h2>
				<p className="text-zinc-400">
					Reservamo-nos o direito de modificar estes Termos de Uso a qualquer
					momento. Notificaremos os usuários sobre mudanças substanciais por
					meio de nosso site ou e-mail. O uso continuado da plataforma após as
					alterações constitui aceitação dos novos termos.
				</p>

				<h2 className="pt-10 font-bold text-lg">10. Contato</h2>
				<p className="text-zinc-400">
					Para dúvidas ou solicitações relacionadas a estes Termos de Uso, entre
					em contato com nosso suporte ao cliente através do e-mail{' '}
					<a href="mailto:suporte@vance.com">suporte@vance.com</a>.
				</p>
			</div>
			<div className="fixed size-14 right-10 flex justify-center bottom-8 ">
				<div className="fixed right-9 bottom-24 ">
					<h1 className="text-xs text-zinc-500 ">Feedback?</h1>
				</div>
				<AlertDialog>
					<AlertDialogTrigger>
						<SmileIcon size={40} className="animate-bounce" />
					</AlertDialogTrigger>
					<AlertDialogContent className="bg-zinc-900 rounded-xl border border-zinc-700">
						<AlertDialogHeader>
							<AlertDialogTitle>
								Como está sendo sua experiência no site?
							</AlertDialogTitle>
							<AlertDialogDescription>
								Seu feedback é muito importante para continuarmos evoluindo.
							</AlertDialogDescription>
							<div className="py-4">
								<Input
									placeholder="Digite seu e-mail"
									className="rounded-xl mb-4 bg-zinc-800 border border-zinc-700"
								/>
								<Textarea
									placeholder="Escreva seu feedback, sugestão ou problema"
									className="rounded-xl resize-none bg-zinc-800 border border-zinc-700"
								/>
							</div>
							<div className="flex items-center gap-2">
								<Input type="checkbox" className="w-4 h-4" />{' '}
								<h1 className="text-xs text-zinc-300">
									Concordo com os Termos e Políticas de privacidade.
								</h1>
							</div>
						</AlertDialogHeader>
						<AlertDialogFooter>
							<AlertDialogAction className="bg-indigo-800 rounded-xl hover:bg-indigo-900">
								Enviar
							</AlertDialogAction>
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialog>
			</div>
		</div>
	)
}
