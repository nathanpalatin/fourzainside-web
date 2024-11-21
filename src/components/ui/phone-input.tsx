import { CheckIcon, ChevronsUpDown } from 'lucide-react'

import * as React from 'react'

import * as RPNInput from 'react-phone-number-input'

import flags from 'react-phone-number-input/flags'

import { Button } from '@/components/ui/button'
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList
} from '@/components/ui/command'
import { Input, InputProps } from '@/components/ui/input'
import {
	Popover,
	PopoverContent,
	PopoverTrigger
} from '@/components/ui/popover'

import { cn } from '@/lib/utils'
import { ScrollArea } from './scroll-area'

type PhoneInputProps = Omit<
	React.InputHTMLAttributes<HTMLInputElement>,
	'onChange' | 'value'
> &
	Omit<RPNInput.Props<typeof RPNInput.default>, 'onChange'> & {
		onChange?: (value: RPNInput.Value) => void
	}

const PhoneInput: React.ForwardRefExoticComponent<PhoneInputProps> =
	React.forwardRef<React.ElementRef<typeof RPNInput.default>, PhoneInputProps>(
		({ className, onChange, ...props }, ref) => {
			return (
				<RPNInput.default
					ref={ref}
					className={cn('flex', className)}
					flagComponent={FlagComponent}
					countrySelectComponent={CountrySelect}
					inputComponent={InputComponent}
					smartCaret={false}
					// @ts-ignore
					onChange={value => onChange?.(value || '')}
					{...props}
				/>
			)
		}
	)
PhoneInput.displayName = 'PhoneInput'

const InputComponent = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, ...props }, ref) => (
		<Input
			className={cn(
				' rounded-full text-center border-none dark:bg-zinc-100 bg-[#101010]/5 pt-6 pb-5 text-zinc-900',
				className
			)}
			{...props}
			ref={ref}
		/>
	)
)
InputComponent.displayName = 'InputComponent'

type CountrySelectOption = { label: string; value: RPNInput.Country }

type CountrySelectProps = {
	disabled?: boolean
	value: RPNInput.Country
	onChange: (value: RPNInput.Country) => void
	options: CountrySelectOption[]
}

const CountrySelect = ({
	disabled,
	value = 'BR',
	onChange,
	options
}: CountrySelectProps) => {
	const handleSelect = React.useCallback(
		(country: RPNInput.Country) => {
			onChange(country)
		},
		[onChange]
	)

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					type="button"
					variant={'outline'}
					className={cn('flex gap-1 border-none px-3')}
					disabled={disabled}
				>
					<FlagComponent country={value} countryName={value} />
					<ChevronsUpDown
						className={cn(
							' h-4 w-4 opacity-50',
							disabled ? 'hidden' : 'opacity-100'
						)}
					/>
				</Button>
			</PopoverTrigger>
			<PopoverContent
				align="start"
				className="w-[300px] bg-zinc-900/10 border-zinc-700 rounded backdrop-blur-xl  p-0"
			>
				<Command>
					<CommandInput placeholder="Pesquisar país..." />
					<CommandList>
						<ScrollArea className="h-72">
							<CommandEmpty className="text-zinc-400 text-center py-12 text-xs">
								Sem resultados.
							</CommandEmpty>
							<CommandGroup>
								{options
									.filter(x => x.value)
									.map(option => (
										<CommandItem
											className="gap-2"
											key={option.value}
											onSelect={() => handleSelect(option.value)}
										>
											<FlagComponent
												country={option.value}
												countryName={option.label}
											/>
											<span className="flex-1 text-sm">{option.label}</span>
											{option.value && (
												<span className="text-foreground/50 text-sm">
													{`+${RPNInput.getCountryCallingCode(option.value)}`}
												</span>
											)}
											<CheckIcon
												className={cn(
													'ml-auto h-4 w-4',
													option.value === value ? 'opacity-100' : 'opacity-0'
												)}
											/>
										</CommandItem>
									))}
							</CommandGroup>
						</ScrollArea>
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	)
}

const FlagComponent = ({ country, countryName }: RPNInput.FlagProps) => {
	const Flag = flags[country]

	return (
		<span className="flex h-7 w-7 overflow-hidden rounded-sm">
			{Flag && <Flag title={countryName} />}
		</span>
	)
}
FlagComponent.displayName = 'FlagComponent'

export { PhoneInput }
