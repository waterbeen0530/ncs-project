A, B, C, D, E, F, G, INF = 0, 1, 2, 3, 4, 5, 6, 100
price = [8, 12, 15, 4, 6, 9, 10]
way = [[A, B, 0], [A, C, 0], [A, D, 0], [B, D, 0], [B, G, 0], [C, E, 0], [C, F, 0], [D, E, 0], [E, F, 0], [E, G, 0], [F, G, 0]]
table = [i for i in range(7)]*2
trunk = len(way)

def GCM(a, b):
  KX = 0
  index = 0
  if a>b: 
    index= a//2+1
  else:
    index = b//2+1
  for i in range(1, index):
    if(a%i == 0 and b%i == 0):
      KX = i
  return KX

def LCM(a, b):
  num = 0
  KX = GCM(a,b)
  KM = a//KX * b
  for i in range(1, KM+1):
    if(KM%i == 0):
      num = num +1
  return num

for i in range(len(way)):
  a, b = way[i][0], way[i][1]
  table[a], table[b+7] = table[a]+1, table[b+7] + 1

for i in range(len(way)):
  a, b = price[way[i][0]], price[way[i][1]]
  way[i][2] = GCM(a,b) * LCM(a,b)