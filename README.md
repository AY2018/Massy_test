# Massy_test 2


Kernel : pytorch-gpu-2.1.1

```python
import torch
print(torch.version) # 2.1.1
print(torch.version.cuda) # 11.8
```


```python

# Vérification Number 2 
if torch.cuda.is_available():
    print(f"GPU: {torch.cuda.get_device_name(0)}")
    print(f"Number of GPUs: {torch.cuda.device_count()}")

# Pour ne pas qu'il demande une clé API 
import os
os.environ['WANDB_MODE'] = 'dryrun'

# Pour éviter les problèmes avec tensorbord 
from ultralytics import settings
settings.update({"tensorboard": False})


from ultralytics import YOLO

# Vérification Number 3 
device = 'cuda' if torch.cuda.is_available() else 'cpu'
print(f'Using device: {device}')


# Modèle déjà télechargé au préalable 
model = YOLO('yolov8n-seg.pt').to(device)

# Vérification Number 4 
try:
    x = torch.randn(3, 3).to(device)
    y = torch.randn(3, 3).to(device)
    z = torch.mm(x, y)
    print(z)
except Exception as e:
    print(f"Error with tensor operation: {e}")

# AMP = False pour ne pas avoir d'erreur
try:
    results = model.train(data="/gpfswork/rech/yug/uxj37ax/DataChinois01/yolov8_colin2/dataset.yaml", 
                          epochs=10, imgsz=640, batch=8, workers=1, amp=False)
except Exception as e:
    print(f"Error during training: {e}")
```