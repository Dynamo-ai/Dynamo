from transformers import AutoModelForCausalLM, AutoTokenizer 
import torch 
import torchvision

tokenizer = AutoTokenizer.from_pretrained("sahaj96/Alpaca-Llama3-8B-Instruct-v1.0") 
model = AutoModelForCausalLM.from_pretrained("sahaj96/Alpaca-Llama3-8B-Instruct-v1.0")

prompt = "A serene landscape with mountains and a lake"

inputs = tokenizer(prompt, return_tensors="pt")

output = model.generate(**inputs)

generated_text = tokenizer.decode(output[0], skip_special_tokens=True)

print("Generated Text:", generated_text)

output_image_path = "generated_image.png"
torchvision.utils.save_image(torch.zeros((3, 256, 256)), output_image_path)

print(f"Image generated and saved at {output_image_path}")